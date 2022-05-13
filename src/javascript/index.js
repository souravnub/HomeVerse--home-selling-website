const hammenu_toggle_btn = document.getElementById("hammenu-toggle-btn");
const body_overlay = document.getElementById("body-fade");
const close_side_menu_btn = document.getElementById("close-side-menu-btn");
const side_menu = document.querySelector(".side-bar-menu");
const bottom_nav_hammenu_btn = document.getElementById(
    "bottom-nav-hammenu-btn"
);
const main_nav_container = document.getElementById("main-nav-container");
const main_nav = document.querySelector("#main-nav-container nav");
const top_nav_container = document.getElementById("top-nav-container");
const header_nav_container = document.querySelector(".header-nav-container");

header_nav_container.style.cssText = `
    padding-bottom:${main_nav_container.getClientRects()[0].height}px; 
`;
window.addEventListener("scroll", () => {
    if (window.scrollY > 500 && window.innerWidth > 840) {
        main_nav_container.style.cssText = `
            position: fixed;
            top:0;
            inset-inline: 0;
            height:max-content;
            box-shadow:  rgb(78 73 181 / 19%) 0px 16px 32px;
        `;
        main_nav_container.classList.add("nav-move-in");
    } else {
        main_nav_container.style.cssText = `
            position: absolute;
            bottom: 0;
            inset-inline: 0;
        `;
        main_nav_container.classList.remove("nav-move-in");
    }
});

hammenu_toggle_btn.addEventListener("click", () => {
    side_menu.classList.add("show-side-bar");
    body_overlay.classList.remove("body-overlay-fade-out");
    body_overlay.classList.add("body-overlay-fade-in");
});
bottom_nav_hammenu_btn.addEventListener("click", () => {
    side_menu.classList.add("show-side-bar");
    body_overlay.classList.remove("body-overlay-fade-out");
    body_overlay.classList.add("body-overlay-fade-in");
});
close_side_menu_btn.addEventListener("click", () => {
    side_menu.classList.remove("show-side-bar");
    body_overlay.classList.remove("body-overlay-fade-in");
    body_overlay.classList.add("body-overlay-fade-out");
});

window.addEventListener("click", (e) => {
    if (
        e.target.classList.contains("body-overlay-fade-in") &&
        side_menu.classList.contains("show-side-bar")
    ) {
        side_menu.classList.remove("show-side-bar");
        body_overlay.classList.remove("body-overlay-fade-in");
        body_overlay.classList.add("body-overlay-fade-out");
    }
});
