const editHomeButton = document.getElementById("edit-button-home");
const homeSection = document.getElementById("home");
const editForm = document.getElementById("edit-home-form");

editHomeButton.addEventListener("click", async () => {
    const response = await fetch("../../json/home_section.json");
    const data = await response.json();

    document.getElementById("edit-title").value = data.title;
    document.getElementById("edit-description").value = data.description;
    document.getElementById("edit-image").value = data.image;

    editForm.style.display = "flex";
    homeSection.style.display = "none";
})

document.getElementById("home-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const updatedData = {
        title: document.getElementById("edit-title").value,
        description: document.getElementById("edit-description").value,
        image: document.getElementById("edit-image").value
    };

    localStorage.setItem("homeData", JSON.stringify(updatedData));

    document.getElementById("home-title").textContent = updatedData.title;
    document.getElementById("home-description").textContent = updatedData.description;
    document.getElementById("home-picture").src = `../../${updatedData.image}`;

    editForm.style.display = "none";
    homeSection.style.display = "flex";
})