/**
 * Smooth Scrolling Navigation
 * 
 * Handles animated scrolling to page sections when clicking navigation links.
 * Features:
 * - Prevents default anchor jump behaviour
 * - Calculates target position with offset
 * - Animated scroll with easing
 * - Existence checking for target elements
 */
$(document).ready(function() {
    $('.link').click(function(e) {
        e.preventDefault();
        const $targetId = $(this).attr('href');
        const $targetSection = $($targetId)
        
        if ($targetSection.length) {
            $('html, body').animate({
                scrollTop: $targetSection.offset().top - 80
            }, 800)
        }
    });
});

// document.querySelectorAll(".link").forEach( link => {
    
//     link.addEventListener("click", (e) => {
//         e.preventDefault();
//         const targetId = e.currentTarget.getAttribute("href");
//         const targetSection = document.querySelector(targetId);

//         if (targetSection) {
//             targetSection.scrollIntoView({
//                 behavior: "smooth"
//             })
//         }
//     });

// })