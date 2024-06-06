document.addEventListener('DOMContentLoaded', (event) => {
    
    const emailInput = document.querySelector('input[type="email"]');
    const submitButton = document.querySelector('.submit button');
    const contactForm = document.getElementById('contactForm');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        const email = emailInput.value;
        if (validateEmail(email)) {
            alert('Thank you for subscribing!');
            console.log(emailInput);
            // Here you can perform any additional actions you want after successful submission
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Add event listener for form submission
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        console.log(formDataObject);
        // Display an alert when the form is submitted
        alert('Form submitted successfully!');
        // Here you can handle the form submission, for example, send the data to a server using fetch() or XMLHttpRequest
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
