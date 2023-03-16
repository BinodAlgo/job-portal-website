
const contactForm = document.querySelector("#contact-form");
const successMessage = document.querySelector("#success-message");
const errorMessage = document.querySelector("#error-message");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    fetch("send-email.php", {
        method: "POST",
        body: formData,
    })
        .then((response) => {
            if (response.ok) {
                contactForm.reset();
                successMessage.classList.remove("d-none");
                errorMessage.classList.add("d-none");
            } else {
                successMessage.classList.add("d-none");
                errorMessage.classList.remove("d-none");
            }
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            successMessage.classList.add("d-none");
            errorMessage.classList.remove("d-none");
        });
});
