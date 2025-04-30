/**
 * Interactive Gradient Background Effect
 * 
 * Creates a dynamic radial gradient that follows mouse movement,
 * with colors that change based on cursor position.
 */
document.addEventListener('mousemove', (e) => {

    if (window.innerWidth < 450) return;

    /** Calculate cursor position as percentage of viewport dimensions */
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    /** Generate HSL colors based on cursor position */
    const color1 = `hsl(${(x / 100) * 360}, 70%, 60%)`;
    const color2 = `hsl(${180 + (y / 100) * 180}, 80%, 30%)`;

    /** Apply radial gradient background */
    document.body.style.background = `
        radial-gradient(
            circle at ${x}% ${y}%, 
            ${color1} 0%, 
            ${color2} 100%
        ) fixed`;
});