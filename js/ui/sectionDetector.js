$(document).ready(function() {
    const $sections = $('section');
    const $navLinks = $('.side-nav a');

    $navLinks.removeClass('active').eq(0).addClass('active');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    $navLinks.removeClass('active');
                    $navLinks.filter('[href="#' + id + '"]').addClass('active');
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: "-20% 0px"
        }
    );

    $sections.each(function() {
        observer.observe(this);
    })
})