/**
 * Manages the home section editing functionality.
 * Handles loading, editing, and saving home section content.
 */
class HomeSectionManager {

    /**
     * Initialize HomeSectionManager with DOM elements and JSON path.
     * Sets up event listeners and loads initial data.
     */
    constructor() {
        this.editButton = document.getElementById("edit-button-home");
        this.cancelButton = document.getElementById("cancel-edit-button");
        this.homeSection = document.getElementById("home");
        this.editFormSection = document.getElementById("edit-home-form");
        this.jsonPath = "../../json/home_section.json";

        this.initEventListeners();
        this.loadData();
    }

    /**
     * Set up all event listeners for the home section.
     */
    initEventListeners() {
        this.editButton.addEventListener("click", () => this.openEditForm());
        this.cancelButton.addEventListener("click", () => this.closeEditForm());
        this.editFormSection.addEventListener("submit", (e) => this.handleFormSubmit(e));
    }

    /**
     * Load home section data from localStorage or JSON file.
     * @returns
     */
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

    /**
     * Open the edit form and fill with current values.
     */
    openEditForm() {
        document.getElementById("edit-title").value = document.getElementById("home-title").textContent;
        document.getElementById("edit-description").value = document.getElementById("home-description").textContent;

        this.editFormSection.style.display = "flex";
        this.homeSection.style.display = "none";
    }

    /**
     * Close the edit form and return to view mode.
     */
    closeEditForm() {
        this.clearErrors();
        this.editFormSection.style.display = "none";
        this.homeSection.style.display = "flex";
    }

    /**
     * Handle form submission.
     * @param {Event} e - The submit event.
     */
    handleFormSubmit(e) {
        e.preventDefault();

        const data = {
            title: document.getElementById("edit-title").value.trim(),
            description: document.getElementById("edit-description").value.trim(),
        }

        if (this.validateData(data)) {
            this.updateData(data.title, data.description);
        }
    }

    /**
     * Update home section data.
     * @param {*} title - New title text.
     * @param {*} description - New description text.
     */
    updateData(title, description) {
        const updatedData = {
            title: title,
            description: description,
        };
        localStorage.setItem("homeData", JSON.stringify(updatedData));
        this.updateUI(updatedData)
        this.closeEditForm();
    }

    /**
     * Update the UI with new data.
     * @param {Object} updatedData  - Contains title and description properties.
     */
    updateUI(updatedData) {
        document.getElementById("home-title").textContent = updatedData.title;
        document.getElementById("home-description").textContent = updatedData.description;
    }

    /**
     * Validate form data before saving.
     * @param {Object} updateData  - Data to validate.
     * @returns {boolean} True if data is valid.
     */
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
        return isValid;
    }

    /**
     * Display an error message for a form field.
     * @param {string} message - Error message to display.
     * @param {string} fieldId - ID of the related form field.
     */
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
    
    /**
     * Style an error message div.
     * @param {HTMLElement} errorDiv - The error message element.
     */
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
    
    /**
     * Clear all error message and field highlights.
     */
    clearErrors() {
        document.querySelectorAll(".error-message").forEach( el => el.remove());
        document.querySelectorAll("input, textarea").forEach( el => {
            el.style.borderColor = "black";
            el.style.borderWidth = "2px"
        });
    }   

}

export default HomeSectionManager;