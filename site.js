"use strict";

/*
 * site.js centraliza el comportamiento compartido del sitio:
 * - inicializa el menú cargado por Footer&NavLoader.js;
 * - marca el enlace de la página actual y actualiza el año del footer;
 * - activa animaciones de entrada al desplazarse por la página;
 * - envía el formulario de Contacto.html al backend /api/contact.
 */

const REVEAL_SELECTOR = [
    ".page-hero",
    ".section-block",
    ".feature-card",
    ".product-card",
    ".game-card",
    ".ecosystem-card",
    ".launcher-section",
    ".person-card",
    ".contact-form",
    ".store-empty",
    ".faq-item",
    ".contact-detail"
].join(",");

let revealObserver = null;
let headerScrollInitialized = false;

document.addEventListener("DOMContentLoaded", initializeSite);
document.addEventListener("nvts:fragments-loaded", initializeSite);

function initializeSite() {
    initializeNavigation();
    initializeYear();
    initializeContactForm();
    initializeScrollReveals();
    initializeHeaderScrollState();
}

function initializeNavigation() {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("#site-nav");

    if (!toggle || !nav || toggle.dataset.initialized === "true") {
        return;
    }

    toggle.dataset.initialized = "true";
    toggle.addEventListener("click", handleNavigationToggle);
    markCurrentPage(nav);
    closeNavigationAfterSelection(nav, toggle);
    closeNavigationWithEscape(nav, toggle);
    closeNavigationWhenClickingOutside(nav, toggle);
}

function handleNavigationToggle(event) {
    const toggle = event.currentTarget;
    const nav = document.querySelector("#site-nav");
    const isOpen = nav.classList.toggle("is-open");

    setNavigationAccessibility(toggle, isOpen);
}

function setNavigationAccessibility(toggle, isOpen) {
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
    );
}

function markCurrentPage(nav) {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const pageLinks = nav.querySelectorAll("a[data-page]");

    pageLinks.forEach((link) => {
        if (link.dataset.page !== currentPage) {
            return;
        }

        link.setAttribute("aria-current", "page");
    });
}

function closeNavigationAfterSelection(nav, toggle) {
    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            setNavigationState(nav, toggle, false);
        });
    });
}

function closeNavigationWithEscape(nav, toggle) {
    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") {
            return;
        }

        setNavigationState(nav, toggle, false);
    });
}

function closeNavigationWhenClickingOutside(nav, toggle) {
    if (document.documentElement.dataset.navigationOutsideClick === "true") {
        return;
    }

    document.documentElement.dataset.navigationOutsideClick = "true";
    document.addEventListener("click", (event) => {
        if (!nav.classList.contains("is-open")) {
            return;
        }

        if (nav.contains(event.target) || toggle.contains(event.target)) {
            return;
        }

        setNavigationState(nav, toggle, false);
    });
}

function setNavigationState(nav, toggle, isOpen) {
    nav.classList.toggle("is-open", isOpen);
    setNavigationAccessibility(toggle, isOpen);
}

function initializeYear() {
    const year = document.querySelector("[data-current-year]");

    if (!year) {
        return;
    }

    year.textContent = String(new Date().getFullYear());
}

function initializeHeaderScrollState() {
    if (headerScrollInitialized) {
        return;
    }

    const header = document.querySelector(".site-header");

    if (!header) {
        return;
    }

    headerScrollInitialized = true;
    updateHeaderScrollState(header);
    window.addEventListener("scroll", () => {
        updateHeaderScrollState(header);
    }, { passive: true });
}

function updateHeaderScrollState(header) {
    header.classList.toggle("has-scrolled", window.scrollY > 12);
}

function initializeScrollReveals() {
    const elements = Array.from(document.querySelectorAll(REVEAL_SELECTOR));

    if (!elements.length) {
        return;
    }

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
        revealImmediately(elements);
        return;
    }

    createRevealObserver();
    observeRevealElements(elements);
}

function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function revealImmediately(elements) {
    elements.forEach((element) => {
        element.classList.add("reveal", "is-visible");
    });
}

function createRevealObserver() {
    if (revealObserver) {
        return;
    }

    revealObserver = new IntersectionObserver(handleRevealEntries, {
        threshold: 0.12,
        rootMargin: "0px 0px -45px 0px"
    });
}

function observeRevealElements(elements) {
    elements.forEach((element, index) => {
        if (element.dataset.revealInitialized === "true") {
            return;
        }

        element.dataset.revealInitialized = "true";
        element.classList.add("reveal");
        element.style.setProperty("--reveal-delay", `${(index % 5) * 55}ms`);
        revealObserver.observe(element);
    });
}

function handleRevealEntries(entries) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
    });
}

function initializeContactForm() {
    const form = document.querySelector("#contact-form");

    if (!form || form.dataset.initialized === "true") {
        return;
    }

    form.dataset.initialized = "true";
    form.dataset.startedAt = String(Date.now());
    form.querySelector("#contact-topic")?.addEventListener("change", () => {
        updateConditionalContactFields(form);
    });
    updateConditionalContactFields(form);
    form.addEventListener("submit", handleContactSubmit);
}

async function handleContactSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.dataset.submitting === "true") {
        return;
    }

    if (!form.reportValidity()) {
        return;
    }

    const submitButton = form.querySelector("button[type='submit']");
    const originalButtonMarkup = submitButton.innerHTML;
    const contact = collectContactData(form);

    await sendContactMessage(form, submitButton, originalButtonMarkup, contact);
}

function updateConditionalContactFields(form) {
    const topic = form.querySelector("#contact-topic")?.value || "";
    const portfolioField = form.querySelector("#portfolio-field");
    const orderField = form.querySelector("#order-field");

    setConditionalField(
        portfolioField,
        topic === "Quiero trabajar en NamuVT Studios"
    );
    setConditionalField(
        orderField,
        topic === "Problema con un pedido de la tienda"
    );
}

function setConditionalField(container, isVisible) {
    if (!container) {
        return;
    }

    container.hidden = !isVisible;
    const input = container.querySelector("input");

    if (!input) {
        return;
    }

    input.disabled = !isVisible;

    if (!isVisible) {
        input.value = "";
    }
}

function collectContactData(form) {
    const formData = new FormData(form);

    return {
        name: String(formData.get("name") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        topic: String(formData.get("topic") || "Consulta o pregunta").trim(),
        portfolioUrl: String(formData.get("portfolioUrl") || "").trim(),
        orderNumber: String(formData.get("orderNumber") || "").trim(),
        message: String(formData.get("message") || "").trim(),
        companyWebsite: String(formData.get("companyWebsite") || "").trim(),
        startedAt: Number(form.dataset.startedAt || Date.now())
    };
}

async function sendContactMessage(form, button, originalButtonMarkup, contact) {
    setFormSubmitting(form, button, true);
    setFormNote(
        "Enviando tu mensaje…",
        "sending"
    );

    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        });

        const result = await readJsonResponse(response);

        if (!response.ok) {
            throw new Error(result.message || "No se pudo enviar el mensaje.");
        }

        form.reset();
        form.dataset.startedAt = String(Date.now());
        updateConditionalContactFields(form);
        setFormNote(
            result.message || "Tu mensaje fue enviado correctamente.",
            "success"
        );
    } catch (error) {
        setFormNote(
            error.message || "No se pudo enviar el mensaje. Intentá nuevamente.",
            "error"
        );
    } finally {
        setFormSubmitting(form, button, false, originalButtonMarkup);
    }
}

async function readJsonResponse(response) {
    return response.json().catch(() => ({}));
}

function setFormSubmitting(form, button, isSubmitting, originalButtonMarkup = "Enviar mensaje") {
    form.dataset.submitting = String(isSubmitting);
    button.disabled = isSubmitting;
    button.setAttribute("aria-busy", String(isSubmitting));
    button.innerHTML = isSubmitting ? "Enviando…" : originalButtonMarkup;
}

function setFormNote(message, state) {
    const note = document.querySelector("#form-note");

    if (!note) {
        return;
    }

    note.textContent = message;
    note.className = `form-note ${state}`;
}
