/**
 * Project Portfolio Navigation System
 * 
 * Manages a project viewer with:
 * - Next/previous navigation
 * - Browser history integration
 * - State persistence
 * - Responsive UI updates
 */
$(document).ready(function() {
    const $projects = $('.project');
    const $prevButton = $('.prev-button');
    const $nextButton = $('.next-button');
    let currentIndex = 0;

    /**
     * Updates the project display and button states.
     * - Shows/hides projects based on currentIndex
     * - Disables buttons at boundaries
     */
    function updateProjectDisplay() {
        $projects.each(function(index) {
            $(this).toggleClass('active', index === currentIndex);
        })

        $prevButton.prop('disabled', currentIndex === 0);
        $nextButton.prop('disabled', currentIndex === $projects.length - 1);

        setTimeout(() => {
            console.log('Current history.state:', history.state);
            console.log('Current index: ', currentIndex)
        }, 0);
    }

    /** Initialize state from browser history on page load */
    $(window).on('load', function() {
        if (history.state && history.state.projectIndex !== undefined) {
            currentIndex = history.state.projectIndex;
            updateProjectDisplay();
        }
    });

    /** Handle browser back/forward navigation */
    $(window).on('popstate', function(e) {
        if (e.originalEvent.state && e.originalEvent.state.projectIndex !== undefined) {
            currentIndex = e.originalEvent.state.projectIndex;
            updateProjectDisplay();
        }
    });

    /** Next button click handler */
    $nextButton.click(function() {
        if (currentIndex < $projects.length - 1) {
            currentIndex++;
            history.pushState({ projectIndex: currentIndex }, '', 'index.html');
            updateProjectDisplay();
        }
    });

    /** Previous button click handler */
    $prevButton.click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            history.pushState({ projectIndex: currentIndex }, '', 'index.html');
            updateProjectDisplay();
        }
    });

    /** Preserve state when navigating to project details */
    $('.btn a').on('click', function() {
        history.replaceState({ projectIndex: currentIndex }, '', 'index.html');
    })

    /** Initialize the display */
    updateProjectDisplay();
});

// document.addEventListener("DOMContentLoaded", () => {
//     const projects = document.querySelectorAll(".project");
//     const prevButton = document.querySelector(".prev-button");
//     const nextButton = document.querySelector(".next-button");
//     let currentIndex = 0;

//     function updateProjectDisplay() {
//         projects.forEach((project, index) => {
//             if (index === currentIndex) {
//                 project.classList.add("active");
//             } else {
//                 project.classList.remove("active");
//             }
//         });
//         prevButton.disabled = currentIndex === 0;
//         nextButton.disabled = currentIndex === projects.length - 1;
//     }

//     nextButton.addEventListener("click", () => {
//         if (currentIndex < projects.length - 1) {
//             currentIndex++;
//             updateProjectDisplay();
//         }
//     })

//     prevButton.addEventListener("click", () => {
//         if (currentIndex > 0) {
//             currentIndex--;
//             updateProjectDisplay();
//         }
//     })

//     updateProjectDisplay();
// })