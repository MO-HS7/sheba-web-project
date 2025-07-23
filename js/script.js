// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link =>
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    })
);

// Header background on scroll
// const header = document.querySelector('.header');
// window.addEventListener('scroll', () => {
//     header.classList.toggle('scrolled', window.scrollY > 50 );
// });

function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = 
    `   position: fixed;
        bottom: 20px;
        left: 40%;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 6px 12px;`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}


window.addEventListener('DOMContentLoaded', () => {
    // Greet returning visitor
    const storedName = localStorage.getItem('userName');
    if (storedName) {
        showToast(`Welcome back, ${storedName}!`);
    }

    // Form Submission
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();

            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const subject = contactForm.querySelector('#subject').value.trim();
            const message = contactForm.querySelector('#message').value.trim();

            if (!name || !email || !subject || !message) {
                showToast('Please fill in all fields.');
                return;
            }

            localStorage.setItem('userName', name); // Store name
            showToast('Thank you! Your message has been sent.');
            contactForm.reset();
        });
    }
});