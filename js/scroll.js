document.querySelectorAll(".nav-link").forEach( link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            // const navHeight = 80;
            // window.scrollTo({
            //     behavior: "smooth",
            //     top: targetSection.offsetTop - navHeight
            // });

            targetSection.scrollIntoView({
                behavior: "smooth"
            })
            
        }

    });

})