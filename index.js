const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const icon = hamburger.querySelector(".material-symbols-outlined");

hamburger.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("active");

    hamburger.setAttribute("aria-expanded", isOpen);
    hamburger.setAttribute(
        "aria-label",
        isOpen ? "Menü schließen" : "Menü öffnen"
    );

    icon.textContent = isOpen ? "close" : "menu";
});