const burgerMenu = document.getElementById("burger-menu");
const sideNav = document.querySelector(".side-nav");

burgerMenu.addEventListener("click", () => {
    sideNav.classList.toggle("active");
})