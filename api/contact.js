import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "namuquimera@gmail.com";
const ALLOWED_TOPICS = new Set([
    "Consulta o pregunta",
    "Quiero trabajar en NamuVT Studios",
    "Problema con un pedido de la tienda"
]);
const MIN_FORM_TIME_MS = 1800;
const MAX_FORM_AGE_MS = 2 * 60 * 60 * 1000;
const RATE_LIMIT_MS = 30 * 1000;

// Límite de mejor esfuerzo por instancia. El honeypot y la validación del servidor
// siguen activos aunque Vercel cree una instancia nueva de la función.
const recentSubmissions = new Map();

async function handleContactRequest(request) {
    if (request.method !== "POST") {
        return jsonResponse({ message: "Método no permitido." }, 405, {
            Allow: "POST"
        });
    }

    if (!isSameOriginRequest(request)) {
        return jsonResponse({ message: "Solicitud no permitida." }, 403);
    }

    const payload = await readRequestBody(request);

    if (!payload) {
        return jsonResponse({ message: "El formulario contiene datos inválidos." }, 400);
    }

    if (payload.companyWebsite) {
        return jsonResponse({ message: "Mensaje recibido." }, 200);
    }

    const contact = validateContact(payload);

    if (!contact.valid) {
        return jsonResponse({ message: contact.message }, 400);
    }

    const ipAddress = getClientIp(request);

    if (isRateLimited(ipAddress)) {
        return jsonResponse({
            message: "Ya recibimos un envío reciente. Esperá unos segundos antes de intentarlo otra vez."
        }, 429);
    }

    const mailCredentials = getMailCredentials();

    if (!mailCredentials) {
        return jsonResponse({
            message: "El servicio de correo todavía no está configurado en el servidor."
        }, 503);
    }

    try {
        await sendContactEmail(contact.value, mailCredentials);
        return jsonResponse({
            message: "Tu mensaje se envió correctamente. Gracias por contactar a NamuVT Studios."
        }, 200);
    } catch (error) {
        console.error("No se pudo entregar el correo de contacto:", error?.code || error?.name || "EMAIL_ERROR");
        return jsonResponse({
            message: "No pudimos enviar el mensaje en este momento. Intentá nuevamente más tarde."
        }, 502);
    }
}

function jsonResponse(data, status = 200, extraHeaders = {}) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "no-store",
            "X-Content-Type-Options": "nosniff",
            ...extraHeaders
        }
    });
}

function isSameOriginRequest(request) {
    const origin = request.headers.get("origin");

    if (!origin) {
        return true;
    }

    try {
        const originHost = new URL(origin).host;
        const forwardedHost = request.headers.get("x-forwarded-host");
        const requestHost = forwardedHost || request.headers.get("host");

        if (!requestHost) {
            return false;
        }

        return requestHost.split(",")[0].trim() === originHost;
    } catch {
        return false;
    }
}

async function readRequestBody(request) {
    const contentLength = Number(request.headers.get("content-length") || 0);

    if (contentLength > 12000) {
        return null;
    }

    try {
        const payload = await request.json();

        if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
            return null;
        }

        return payload;
    } catch {
        return null;
    }
}

function validateContact(payload) {
    const name = normalizeSingleLineText(payload.name, 100);
    const email = normalizeSingleLineText(payload.email, 254).toLowerCase();
    const rawTopic = normalizeText(payload.topic, 80);
    const topic = rawTopic;
    const message = normalizeText(payload.message, 6000);
    const portfolioUrl = normalizeText(payload.portfolioUrl, 500);
    const orderNumber = normalizeSingleLineText(payload.orderNumber, 80);
    const startedAt = Number(payload.startedAt);
    const elapsed = Date.now() - startedAt;

    if (!name || !email || !message) {
        return invalidContact("Completá tu nombre, correo electrónico y mensaje.");
    }

    if (!ALLOWED_TOPICS.has(topic)) {
        return invalidContact("Seleccioná uno de los motivos de contacto disponibles.");
    }

    if (!isValidEmail(email)) {
        return invalidContact("Ingresá una dirección de correo electrónico válida.");
    }

    if (message.length < 10) {
        return invalidContact("El mensaje debe contener al menos 10 caracteres.");
    }

    if (portfolioUrl && topic !== "Quiero trabajar en NamuVT Studios") {
        return invalidContact("El enlace de portfolio solo corresponde a postulaciones laborales.");
    }

    if (orderNumber && topic !== "Problema con un pedido de la tienda") {
        return invalidContact("El número de pedido solo corresponde a consultas sobre la tienda.");
    }

    if (portfolioUrl && !isValidHttpUrl(portfolioUrl)) {
        return invalidContact("El enlace al portfolio o CV debe ser una URL válida.");
    }

    if (!Number.isFinite(startedAt) || elapsed < MIN_FORM_TIME_MS || elapsed > MAX_FORM_AGE_MS) {
        return invalidContact("No pudimos validar el envío. Actualizá la página e intentá nuevamente.");
    }

    return {
        valid: true,
        value: { name, email, topic, message, portfolioUrl, orderNumber }
    };
}

function invalidContact(message) {
    return { valid: false, message };
}

function normalizeText(value, maxLength) {
    if (typeof value !== "string") {
        return "";
    }

    return value.replace(/\u0000/g, "").trim().slice(0, maxLength);
}

function normalizeSingleLineText(value, maxLength) {
    return normalizeText(value, maxLength)
        .replace(/[\r\n\t]+/g, " ")
        .replace(/\s{2,}/g, " ");
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidHttpUrl(value) {
    try {
        const url = new URL(value);
        const validProtocol = url.protocol === "https:" || url.protocol === "http:";
        const hasCredentials = Boolean(url.username || url.password);

        return validProtocol && !hasCredentials;
    } catch {
        return false;
    }
}

function getClientIp(request) {
    const forwardedFor = request.headers.get("x-forwarded-for");

    if (forwardedFor) {
        return forwardedFor.split(",")[0].trim();
    }

    return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ipAddress) {
    const now = Date.now();
    const lastSubmission = recentSubmissions.get(ipAddress);

    if (lastSubmission && now - lastSubmission < RATE_LIMIT_MS) {
        return true;
    }

    recentSubmissions.set(ipAddress, now);
    pruneRateLimitEntries(now);
    return false;
}

function pruneRateLimitEntries(now) {
    if (recentSubmissions.size < 500) {
        return;
    }

    for (const [ipAddress, timestamp] of recentSubmissions) {
        if (now - timestamp > RATE_LIMIT_MS) {
            recentSubmissions.delete(ipAddress);
        }
    }
}

function getMailCredentials() {
    const user = process.env.GMAIL_USER?.trim();
    const appPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");

    if (!user || !appPassword) {
        return null;
    }

    return { user, appPassword };
}

async function sendContactEmail(contact, credentials) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: credentials.user,
            pass: credentials.appPassword
        },
        connectionTimeout: 8000,
        greetingTimeout: 8000,
        socketTimeout: 12000
    });

    const safeName = escapeHtml(contact.name);
    const safeEmail = escapeHtml(contact.email);
    const safeTopic = escapeHtml(contact.topic);
    const safeMessage = escapeHtml(contact.message).replace(/\r?\n/g, "<br>");
    const safeOrderNumber = escapeHtml(contact.orderNumber);
    const safePortfolioUrl = escapeHtml(contact.portfolioUrl);
    const subjectName = contact.name.replace(/[\r\n]+/g, " ").slice(0, 80);
    const optionalText = buildOptionalEmailText(contact);
    const optionalHtml = buildOptionalEmailHtml(
        safeOrderNumber,
        safePortfolioUrl
    );

    try {
        await transporter.sendMail({
            from: `NamuVT Studios <${credentials.user}>`,
            to: RECIPIENT_EMAIL,
            replyTo: contact.email,
            subject: `[NamuVT Studios] ${contact.topic} — ${subjectName}`,
            text: [
                "Nuevo mensaje desde el formulario de NamuVT Studios",
                "",
                `Nombre: ${contact.name}`,
                `Correo: ${contact.email}`,
                `Motivo: ${contact.topic}`,
                ...optionalText,
                "",
                contact.message
            ].join("\n"),
            html: `
                <div style="font-family:Arial,sans-serif;line-height:1.6;color:#18202b;max-width:680px">
                    <h2>Nuevo mensaje desde NamuVT Studios</h2>
                    <p><strong>Nombre:</strong> ${safeName}</p>
                    <p><strong>Correo:</strong> ${safeEmail}</p>
                    <p><strong>Motivo:</strong> ${safeTopic}</p>
                    ${optionalHtml}
                    <hr>
                    <p>${safeMessage}</p>
                </div>
            `
        });
    } finally {
        transporter.close();
    }
}

function buildOptionalEmailText(contact) {
    const lines = [];

    if (contact.orderNumber) {
        lines.push(`Número de pedido: ${contact.orderNumber}`);
    }

    if (contact.portfolioUrl) {
        lines.push(`Portfolio / CV: ${contact.portfolioUrl}`);
    }

    return lines;
}

function buildOptionalEmailHtml(orderNumber, portfolioUrl) {
    const fields = [];

    if (orderNumber) {
        fields.push(`<p><strong>Número de pedido:</strong> ${orderNumber}</p>`);
    }

    if (portfolioUrl) {
        fields.push(`<p><strong>Portfolio / CV:</strong> ${portfolioUrl}</p>`);
    }

    return fields.join("\n");
}

function escapeHtml(value) {
    return value.replace(/[&<>"']/g, (character) => {
        const replacements = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return replacements[character];
    });
}

export default {
    fetch: handleContactRequest
};
