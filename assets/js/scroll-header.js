(() => {
    const header = document.querySelector("div.fixed.inset-x-0.z-100") || document.querySelector("header");
    if (!header) return;

    let lastY = window.scrollY;

    const onScroll = () => {
        const currentY = window.scrollY;

        if (currentY <= 8) {
            header.classList.remove("header-condensed");
            lastY = currentY;
            return;
        }

        if (currentY > lastY) {
            header.classList.add("header-condensed");
        } else {
            header.classList.remove("header-condensed");
        }

        lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
})();
