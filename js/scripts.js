document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for contacting Fresh N More! We will get back to you soon.');
        form.reset(); 
    });
});
