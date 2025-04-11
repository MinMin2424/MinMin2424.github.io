$(document).ready(function() {
    const $dotContainer = $('.dot-separator');
    const $dotCount = 5;
    const $dotSize = 12;
    const $dotColor = '#034C53';
    const $dotStroke = 'black';

    for (let i = 0; i < $dotCount; i++) {
        const $svgDot = $(`
            <svg 
                class="dot"
                width="${$dotSize}"
                height="${$dotSize}"
                viewBox="0 0 ${$dotSize} ${$dotSize}"
            >
                <circle
                    cx="${$dotSize/2}"
                    cy="${$dotSize/2}"
                    r="${$dotSize/2 - 1}"
                    fill="${$dotColor}"
                    stroke="${$dotStroke}"
                    stroke-width="1"
                />
            </svg>
        `)

        $svgDot.css('filter', 'drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.3)')
        $svgDot.css('margin', '10px 0');
        $dotContainer.append($svgDot);
    }
});