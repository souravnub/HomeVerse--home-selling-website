const hammenu_toggle_btn = document.getElementById("hammenu-toggle-btn");
const body_overlay = document.getElementById("body-fade");
const close_side_menu_btn = document.getElementById("close-side-menu-btn");
const side_menu = document.querySelector(".side-bar-menu");
const bottom_nav_hammenu_btn = document.getElementById(
    "bottom-nav-hammenu-btn"
);

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
