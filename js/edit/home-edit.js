const editHomeButton = document.getElementById("edit-button-home");
const cancelEditButton = document.getElementById("cancel-edit-button");
const homeSection = document.getElementById("home");
const editFormSection = document.getElementById("edit-home-form");

editHomeButton.addEventListener("click", async () => {
    const response = await fetch("../../json/home_section.json");
    const data = await response.json();

    document.getElementById("edit-title").value = data.title;
    document.getElementById("edit-description").value = data.description;
    document.getElementById("edit-image").value = data.image;

    editFormSection.style.display = "flex";
    homeSection.style.display = "none";
})

cancelEditButton.addEventListener("click", () => {
    editFormSection.style.display = "none";
    homeSection.style.display = "flex";
})

export function updatedData(title, description, image) {
    const updatedData = {
        title: title,
        description: description,
        image: image
    };

    localStorage.setItem("homeData", JSON.stringify(updatedData));

    document.getElementById("home-title").textContent = updatedData.title;
    document.getElementById("home-description").textContent = updatedData.description;
    document.getElementById("home-picture").src = `../../${updatedData.image}`;

    editFormSection.style.display = "none";
    homeSection.style.display = "flex";
}