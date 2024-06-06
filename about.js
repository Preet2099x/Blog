document.addEventListener('DOMContentLoaded', (event) => {
    
    const emailInput = document.querySelector('input[type="email"]');
    const submitButton = document.querySelector('.submit button');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        const email = emailInput.value;
        if (validateEmail(email)) {
            alert('Thank you for subscribing!');
            console.log(emailInput)
        } else {
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});