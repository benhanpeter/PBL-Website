let burgerBtn = document.querySelector(".burger-menu-btn");
let burgerMenu = document.querySelector(".burger-menu");
let menuLinks = document.querySelectorAll(".burger-menu a");

let isBurgerOpen = false;

// Helper function to close the menu and reset button state
function closeMenu() {
    burgerMenu.style.display = "none";
    burgerBtn.style.backgroundPosition = "center, center left 50px";
    isBurgerOpen = false;
}

// Helper function to open the menu
function openMenu() {
    burgerMenu.style.display = "block";
    burgerBtn.style.backgroundPosition = "center left 50px, center";
    isBurgerOpen = true;
}

burgerBtn.onclick = function () {
    if (!isBurgerOpen) {
        openMenu();
    }
    else if (isBurgerOpen) {
        closeMenu();
    }
}

// Close menu whenever any link inside it is clicked
menuLinks.forEach(function (link) {
    link.onclick = function () {
        closeMenu();
    };
});