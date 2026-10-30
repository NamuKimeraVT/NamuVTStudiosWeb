"use strict";

const SHARED_FRAGMENTS = [
    {
        selector: "#site-header",
        file: "nav.html"
    },
    {
        selector: "#site-footer",
        file: "footer.html"
    }
];

document.addEventListener("DOMContentLoaded", loadSharedFragments);

async function loadSharedFragments() {
    const loadingTasks = SHARED_FRAGMENTS.map(loadFragment);
    const results = await Promise.all(loadingTasks);

    document.dispatchEvent(
        new CustomEvent("nvts:fragments-loaded", {
            detail: {
                results
            }
        })
    );
}

async function loadFragment(fragment) {
    const container = document.querySelector(fragment.selector);

    if (!container) {
        console.error(`No se encontró el contenedor ${fragment.selector}.`);
        return createFragmentResult(fragment.file, false);
    }

    try {
        const response = await fetch(fragment.file);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        container.innerHTML = await response.text();
        return createFragmentResult(fragment.file, true);
    } catch (error) {
        console.error(`No se pudo cargar ${fragment.file}:`, error);
        return createFragmentResult(fragment.file, false);
    }
}

function createFragmentResult(file, loaded) {
    return {
        file,
        loaded
    };
}
