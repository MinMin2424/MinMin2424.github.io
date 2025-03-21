const img = document.getElementById("button-home");
img.addEventListener("mouseenter", () => {
    img.src = "../images/home-lavender.png";
});
img.addEventListener("mouseleave", () => {
    img.src = "../images/home.png";
});