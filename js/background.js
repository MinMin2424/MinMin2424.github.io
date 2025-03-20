document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    const color1 = `rgb(${Math.min(255, x * 2)}, ${Math.min(255, y * 2)}, 100)`;
    const color2 = `rgb(${Math.min(255, (100-x) * 2)}, ${Math.min(255, (100-y) * 2)}, 50)`;

    document.body.style.background = `radial-gradient(circle at ${x}% ${y}%, ${color1}, ${color2})`;
    document.body.style.transition = "background 1s ease-out";
});