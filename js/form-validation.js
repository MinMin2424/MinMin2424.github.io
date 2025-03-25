import {
    updatedData
} from '../js/edit/home-edit.js'

const editForm = document.getElementById("home-form");

editForm.addEventListener("submit", (e) => {

    e.preventDefault();
    clearErrors();

    const title = document.getElementById("edit-title").value.trim();
    const description = document.getElementById("edit-description").value.trim();
    const image = document.getElementById("edit-image").value.trim();

    let isValid = true;

    if (!title) {
        showError("Title cannot be empty", "edit-title");
        isValid = false;
    }
    if (!description) {
        showError("Description cannot be empty", "edit-description")
        isValid = false;
    }
    if (!image) {
        showError("Image URL cannot be empty", "edit-image");
        isValid = false;
    }
    if(isValid) {
        updatedData(title, description, image)
    }

});

function showError(message, fieldId) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;
    designErrorDiv(errorDiv);

    const form = field.closest("form");
    const submitButton = form.querySelector("button[type='submit']");
    form.insertBefore(errorDiv, submitButton);

    field.style.borderColor = "red";
    field.style.borderWidth = "5px";
}

function designErrorDiv(errorDiv) {
    errorDiv.style.color = "lavender";
    errorDiv.style.fontSize = "0.9em";
    errorDiv.style.borderColor = "lavender";
    errorDiv.style.borderWidth = "1px";
    errorDiv.style.borderRadius = "10px"
    errorDiv.style.borderStyle = "solid";
    errorDiv.style.marginBottom = "20px";
    errorDiv.style.padding = "10px";
}

function clearErrors() {
    document.querySelectorAll(".error-message").forEach( el => el.remove());
    document.querySelectorAll("input, textarea").forEach( el => {
        el.style.borderColor = "black";
        el.style.borderWidth = "2px"
    });
}   