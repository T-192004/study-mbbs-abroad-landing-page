document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("leadForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const countrySelect = document.getElementById("country");

    // Validate Email Format
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Validate Phone Number (Basic Validation)
    function isValidPhone(phone) {
        return /^\d{10}$/.test(phone);
    }

    // Show Error Message
    function showError(input, message) {
        const parent = input.parentElement;
        let error = parent.querySelector(".error-message");

        if (!error) {
            error = document.createElement("p");
            error.className = "error-message text-red-600 text-sm mt-1";
            parent.appendChild(error);
        }

        error.innerText = message;
    }

    // Remove Error Message
    function removeError(input) {
        const parent = input.parentElement;
        const error = parent.querySelector(".error-message");
        if (error) {
            error.remove();
        }
    }

    // Form Validation on Submit
    form.addEventListener("submit", function (event) {
        let isValid = true;

        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name is required.");
            isValid = false;
        } else {
            removeError(nameInput);
        }

        if (!isValidEmail(emailInput.value)) {
            showError(emailInput, "Enter a valid email address.");
            isValid = false;
        } else {
            removeError(emailInput);
        }

        if (!isValidPhone(phoneInput.value)) {
            showError(phoneInput, "Enter a valid 10-digit phone number.");
            isValid = false;
        } else {
            removeError(phoneInput);
        }

        if (countrySelect.value === "") {
            showError(countrySelect, "Please select a country.");
            isValid = false;
        } else {
            removeError(countrySelect);
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            alert("Application submitted successfully!");
        }
    });

    // Interactive Hero Section Animation
    const heroSection = document.querySelector("header");
    heroSection.addEventListener("mouseover", function () {
        heroSection.style.transition = "0.5s";
        heroSection.style.backgroundColor = "#004aad";
    });
    heroSection.addEventListener("mouseout", function () {
        heroSection.style.backgroundColor = "#2563eb";
    });
});
