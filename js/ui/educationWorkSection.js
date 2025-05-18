function adjustLayout() {

    if ($(window).width() <= 700) {

        $('.timeline-item').each(function() {

            const item = $(this);
            const dateDiv = item.find('.date');
            const info = item.find('.info');

            if (!item.hasClass('small-screen')) {
                if (dateDiv.length > 0) {
                    const rawHtml = dateDiv.html();
                    const cleanText = rawHtml.replace(/<br\s*\/?>/gi, ' ');
                    dateDiv.hide();
                    info.find('h4').after(`<p class="moved-date">${cleanText}</p>`)
                    item.addClass('small-screen');
                }
            }
        });

    } else {
        $('.timeline-item').each(function() {

            const item = $(this);
            const dateDiv = item.find('.date');
            const info = item.find('.info');

            if (item.hasClass('small-screen')) {
                if (dateDiv.length > 0) {
                    dateDiv.show();
                    info.find('p.moved-date').remove();
                    item.removeClass('small-screen');
                }
            }
        });
    }
}

$(document).ready(adjustLayout);
$(window).on('resize', adjustLayout);