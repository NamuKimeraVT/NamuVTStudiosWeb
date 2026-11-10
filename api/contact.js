import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "namuquimera@gmail.com";
const ALLOWED_TOPICS = new Set([
    "General question or inquiry",
    "I would like to work at NamuVT Studios",
    "Store order issue"
]);
const MIN_FORM_TIME_MS = 1800;
const MAX_FORM_AGE_MS = 2 * 60 * 60 * 1000;
const RATE_LIMIT_MS = 30 * 1000;

// Best-effort per-instance limit. The honeypot and server-side validation
// remain active even when Vercel creates a new function instance.
const recentSubmissions = new Map();

async function handleContactRequest(request) {
    if (request.method !== "POST") {
        return jsonResponse({ message: "Method not allowed." }, 405, {
            Allow: "POST"
        });
    }

    if (!isSameOriginRequest(request)) {
        return jsonResponse({ message: "Request not allowed." }, 403);
    }

    const payload = await readRequestBody(request);

    if (!payload) {
        return jsonResponse({ message: "The form contains invalid data." }, 400);
    }

    if (payload.companyWebsite) {
        return jsonResponse({ message: "Message received." }, 200);
    }

    const contact = validateContact(payload);

    if (!contact.valid) {
        return jsonResponse({ message: contact.message }, 400);
    }

    const ipAddress = getClientIp(request);

    if (isRateLimited(ipAddress)) {
        return jsonResponse({
            message: "We recently received a submission. Please wait a few seconds before trying again."
        }, 429);
    }

    const mailCredentials = getMailCredentials();

    if (!mailCredentials) {
        const missingVariables = getMissingMailVariables();
        console.error("Incomplete email configuration. Missing variables:", missingVariables.join(", "));
        return jsonResponse({
            message: "The email service is not configured. Check GMAIL_USER and GMAIL_APP_PASSWORD in your Vercel environment variables, then redeploy."
        }, 503);
    }

    try {
        await sendContactEmail(contact.value, mailCredentials);
        return jsonResponse({
            message: "Your message was sent successfully. Thank you for contacting NamuVT Studios."
        }, 200);
    } catch (error) {
        console.error("Could not deliver the contact email:", error?.code || error?.name || "EMAIL_ERROR");
        return jsonResponse({
            message: "We could not send your message right now. Please try again later."
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
        return invalidContact("Please enter your name, email address, and message.");
    }

    if (!ALLOWED_TOPICS.has(topic)) {
        return invalidContact("Please select one of the available contact reasons.");
    }

    if (!isValidEmail(email)) {
        return invalidContact("Please enter a valid email address.");
    }

    if (message.length < 10) {
        return invalidContact("The message must contain at least 10 characters.");
    }

    if (portfolioUrl && topic !== "I would like to work at NamuVT Studios") {
        return invalidContact("The portfolio link is only available for job inquiries.");
    }

    if (orderNumber && topic !== "Store order issue") {
        return invalidContact("The order number is only available for store inquiries.");
    }

    if (portfolioUrl && !isValidHttpUrl(portfolioUrl)) {
        return invalidContact("The portfolio or resume link must be a valid URL.");
    }

    if (!Number.isFinite(startedAt) || elapsed < MIN_FORM_TIME_MS || elapsed > MAX_FORM_AGE_MS) {
        return invalidContact("We could not validate your submission. Refresh the page and try again.");
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


function getMissingMailVariables() {
    const missing = [];

    if (!process.env.GMAIL_USER?.trim()) {
        missing.push("GMAIL_USER");
    }

    if (!process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "")) {
        missing.push("GMAIL_APP_PASSWORD");
    }

    return missing;
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
                "New message from the NamuVT Studios contact form",
                "",
                `Name: ${contact.name}`,
                `Email: ${contact.email}`,
                `Reason: ${contact.topic}`,
                ...optionalText,
                "",
                contact.message
            ].join("\n"),
            html: `
                <div style="font-family:Arial,sans-serif;line-height:1.6;color:#18202b;max-width:680px">
                    <h2>New message from NamuVT Studios</h2>
                    <p><strong>Name:</strong> ${safeName}</p>
                    <p><strong>Email:</strong> ${safeEmail}</p>
                    <p><strong>Reason:</strong> ${safeTopic}</p>
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
        lines.push(`Order number: ${contact.orderNumber}`);
    }

    if (contact.portfolioUrl) {
        lines.push(`Portfolio / CV: ${contact.portfolioUrl}`);
    }

    return lines;
}

function buildOptionalEmailHtml(orderNumber, portfolioUrl) {
    const fields = [];

    if (orderNumber) {
        fields.push(`<p><strong>Order number:</strong> ${orderNumber}</p>`);
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
