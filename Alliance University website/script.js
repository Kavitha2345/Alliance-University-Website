// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form validation (for demonstration purposes)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Example of simple validation
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // You can add more sophisticated validation here
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Message sent successfully!');
    this.reset();
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
