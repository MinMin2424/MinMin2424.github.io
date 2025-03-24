window.addEventListener("load", loadHomeData);

async function loadHomeData() {
    const savedData = localStorage.getItem("homeData");
    if (savedData) {
        const data = JSON.parse(savedData);
        updateHomeSection(data);
    }
    const response = await fetch("../json/home_section.json");
    const data = await response.json();
    updateHomeSection(data);
}

function updateHomeSection(data) {
    document.getElementById("home-title").textContent = data.title;
    document.getElementById("home-description").textContent = data.description;
    document.getElementById("home-picture").src = data.image;
}