document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('input[type="email"]');
    const submitButton = document.querySelector('.submit button');
    const contactForm = document.getElementById('contactForm');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        const email = emailInput.value;
        if (validateEmail(email)) {
            alert('Thank you for subscribing!');
            console.log(emailInput);
        } else {
            alert('Please enter a valid email address.');
        }
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        console.log(formDataObject);
        alert('Form submitted successfully!');
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});