"use strict";

(function () {
    const fragments = [
        {
            selector: "#site-header",
            file: "nav.html"
        },
        {
            selector: "#site-footer",
            file: "footer.html"
        }
    ];

    const loaderScript = document.currentScript;
    const fragmentsBaseUrl = getFragmentsBaseUrl(loaderScript);

    initializeFragmentLoading();

    function getFragmentsBaseUrl(scriptElement) {
        if (scriptElement && scriptElement.src) {
            return new URL(".", scriptElement.src);
        }

        return new URL(".", window.location.href);
    }

    function initializeFragmentLoading() {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", loadSharedFragments, {
                once: true
            });
            return;
        }

        loadSharedFragments();
    }

    async function loadSharedFragments() {
        const results = await Promise.all(
            fragments.map(loadFragment)
        );

        document.dispatchEvent(
            new CustomEvent("nvts:fragments-loaded", {
                detail: { results }
            })
        );
    }

    async function loadFragment(fragment) {
        const container = document.querySelector(fragment.selector);

        if (!container) {
            reportFragmentError(fragment, "No se encontró el contenedor HTML.");
            return createFragmentResult(fragment.file, false);
        }

        try {
            const fragmentUrl = new URL(fragment.file, fragmentsBaseUrl);
            const response = await fetch(fragmentUrl.href, {
                method: "GET",
                cache: "no-cache",
                headers: {
                    Accept: "text/html"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status} al solicitar ${fragmentUrl.pathname}`);
            }

            const markup = await response.text();

            if (!markup.trim()) {
                throw new Error(`El archivo ${fragment.file} está vacío.`);
            }

            container.innerHTML = markup;
            return createFragmentResult(fragment.file, true);
        } catch (error) {
            reportFragmentError(fragment, error.message);
            return createFragmentResult(fragment.file, false);
        }
    }

    function reportFragmentError(fragment, message) {
        console.error(
            `[NamuVT Studios] No se pudo cargar ${fragment.file}: ${message}`
        );
    }

    function createFragmentResult(file, loaded) {
        return {
            file,
            loaded
        };
    }
})();
