document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const formSuccess = document.getElementById("form-success");
    const inputs = form.querySelectorAll("input, textarea, select");

    // Hide success message initially
    formSuccess.style.display = "none";

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

        inputs.forEach((input) => {
            const errorMsg = input.parentElement.querySelector(".error");

            // Email validation
            if (input.type === "email") {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value.trim())) {
                    errorMsg.style.display = "block";
                    input.classList.add("invalid");
                    isValid = false;
                } else {
                    errorMsg.style.display = "none";
                    input.classList.remove("invalid");
                }
            } 
            // Other required fields
            else if (input.value.trim() === "") {
                errorMsg.style.display = "block";
                input.classList.add("invalid");
                isValid = false;
            } else {
                errorMsg.style.display = "none";
                input.classList.remove("invalid");
            }
        });

        // If form is valid, show success message
        if (isValid) {
            formSuccess.style.display = "block";
            form.reset();

            // Hide success after 5 seconds
            setTimeout(() => {
                formSuccess.style.display = "none";
            }, 5000);
        }
    });

    // Clear error messages while typing
    inputs.forEach((input) => {
        input.addEventListener("input", () => {
            input.classList.remove("invalid");
            const errorMsg = input.parentElement.querySelector(".error");
            if (errorMsg) errorMsg.style.display = "none";
        });
    });
});
