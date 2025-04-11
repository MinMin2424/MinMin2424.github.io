$(document).ready(function() {
    const $img = $('#button-home');
    $img.on({
        mouseenter: function() {
            $(this).attr('src', '../images/home-lavender.png')
        },
        mouseleave: function() {
            $(this).attr('src', '../images/home.png')
        }
    });
});

// const img = document.getElementById("button-home");
// img.addEventListener("mouseenter", () => {
//     img.src = "../images/home-lavender.png";
// });
// img.addEventListener("mouseleave", () => {
//     img.src = "../images/home.png";
// });