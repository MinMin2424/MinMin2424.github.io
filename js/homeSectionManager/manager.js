class HomeSectionManager {

    constructor() {
        this.editButton = document.getElementById("edit-button-home");
        this.cancelButton = document.getElementById("cancel-edit-button");
        this.homeSection = document.getElementById("home");
        this.editFormSection = document.getElementById("edit-home-form");
        this.jsonPath = "../../json/home_section.json";

        this.initEventListeners();
        this.loadData();
    }

    initEventListeners() {
        this.editButton.addEventListener("click", () => this.openEditForm());
        this.cancelButton.addEventListener("click", () => this.closeEditForm());
        this.editFormSection.addEventListener("submit", (e) => this.handleFormSubmit(e));
    }

    async loadData() {
        try {
            const savedData = localStorage.getItem("homeData");
            if (savedData) {
                this.updateUI(JSON.parse(savedData));
                return;
            }
            const response = await fetch(this.jsonPath);
            const data = await response.json();
            this.updateUI(data)
        } catch (error) {
            console.error("Cannot load data: ", error);
        }
    }

    openEditForm() {
        document.getElementById("edit-title").value = document.getElementById("home-title").textContent;
        document.getElementById("edit-description").value = document.getElementById("home-description").textContent;
        // document.getElementById("edit-image").value = document.getElementById("home-picture").src;

        this.editFormSection.style.display = "flex";
        this.homeSection.style.display = "none";
    }

    closeEditForm() {
        this.clearErrors();
        this.editFormSection.style.display = "none";
        this.homeSection.style.display = "flex";
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const data = {
            title: document.getElementById("edit-title").value.trim(),
            description: document.getElementById("edit-description").value.trim(),
            // image: document.getElementById("edit-image").value.trim()
        }

        if (this.validateData(data)) {
            this.updateData(data.title, data.description/*, data.image*/);
        }
    }

    updateData(title, description /*, image */) {
        const updatedData = {
            title: title,
            description: description,
            // image: image
        };
        localStorage.setItem("homeData", JSON.stringify(updatedData));
        this.updateUI(updatedData)
        this.closeEditForm();
    }

    updateUI(updatedData) {
        document.getElementById("home-title").textContent = updatedData.title;
        document.getElementById("home-description").textContent = updatedData.description;
        // document.getElementById("home-picture").src = `../../${updatedData.image}`;
    }

    validateData(updateData) {
        let isValid = true;
        if (!updateData.title) {
            this.showError("Title cannot be empty", "edit-title");
            isValid = false;
        }
        if (!updateData.description) {
            this.showError("Description cannot be empty", "edit-description")
            isValid = false;
        }
        // if (!updateData.image) {
        //     this.showError("Image URL cannot be empty", "edit-image");
        //     isValid = false;
        // }
        return isValid;
    }

    showError(message, fieldId) {
        const field = document.getElementById(fieldId);
        const errorDiv = document.createElement("div");
        errorDiv.className = "error-message";
        errorDiv.textContent = message;
        this.designErrorDiv(errorDiv);
    
        const form = field.closest("form");
        const submitButton = form.querySelector("button[type='submit']");
        form.insertBefore(errorDiv, submitButton);
    
        field.style.borderColor = "red";
        field.style.borderWidth = "5px";
    }
    
    designErrorDiv(errorDiv) {
        errorDiv.style.color = "lavender";
        errorDiv.style.fontSize = "0.9em";
        errorDiv.style.borderColor = "lavender";
        errorDiv.style.borderWidth = "1px";
        errorDiv.style.borderRadius = "10px"
        errorDiv.style.borderStyle = "solid";
        errorDiv.style.marginBottom = "20px";
        errorDiv.style.padding = "10px";
    }
    
    clearErrors() {
        document.querySelectorAll(".error-message").forEach( el => el.remove());
        document.querySelectorAll("input, textarea").forEach( el => {
            el.style.borderColor = "black";
            el.style.borderWidth = "2px"
        });
    }   

}

export default HomeSectionManager;