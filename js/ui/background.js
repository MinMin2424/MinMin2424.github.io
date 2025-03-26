document.addEventListener('mousemove', (e) => {

    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    const color1 = `hsl(${(x / 100) * 360}, 70%, 60%)`;
    const color2 = `hsl(${180 + (y / 100) * 180}, 80%, 30%)`;

    document.body.style.background = `
        radial-gradient(
            circle at ${x}% ${y}%, 
            ${color1} 0%, 
            ${color2} 100%
        ) fixed`;
});