/**
 * Responsive Navigation Menu
 * 
 * Handles the interactive behaviour of the hamburger menu.
 */
$(document).ready(function() {
    const $burgerMenu = $('#burger-menu');
    const $sideNav = $('.side-nav');
    $burgerMenu.click(function() {
        $sideNav.toggleClass('active');
    });
});

// const burgerMenu = document.getElementById("burger-menu");
// const sideNav = document.querySelector(".side-nav");

// burgerMenu.addEventListener("click", () => {
//     sideNav.classList.toggle("active");
// })