(() => {
    const header = document.querySelector("div.fixed.inset-x-0.z-100") || document.querySelector("header");
    if (!header) return;

    const threshold = 50;
    let lastY = window.scrollY;

    const onScroll = () => {
        const currentY = window.scrollY;

        if (currentY <= threshold) {
            header.classList.remove("header-scrolled");
            lastY = currentY;
            return;
        }

        if (currentY > threshold && currentY > lastY) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }

        lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
})();
