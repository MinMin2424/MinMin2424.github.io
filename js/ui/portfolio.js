document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    let currentIndex = 0;

    function updateProjectDisplay() {
        projects.forEach((project, index) => {
            if (index === currentIndex) {
                project.classList.add("active");
            } else {
                project.classList.remove("active");
            }
        });
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === projects.length - 1;
    }

    nextButton.addEventListener("click", () => {
        if (currentIndex < projects.length - 1) {
            currentIndex++;
            updateProjectDisplay();
        }
    })

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateProjectDisplay();
        }
    })

    updateProjectDisplay();
})

