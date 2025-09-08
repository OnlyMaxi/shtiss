const style = document.createElement("style");

style.textContent = `
    #logo h1 a {
        background: url("https://raw.githubusercontent.com/OnlyMaxi/shtiss/refs/heads/main/media/SHIT.png") !important;
    }
`;

function appendNewStyle() {
    document.head.appendChild(style);
}

if (document.head) {
    appendNewStyle();
} else {
    const observer = new MutationObserver(() => {
        if (document.head) {
            appendNewStyle();
            observer.disconnect();
        }
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });
}