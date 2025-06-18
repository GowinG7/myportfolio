// Hamburger menu for mobile navigation
const hamburger = document.getElementById('hamburger');
const navUl = document.querySelector('header nav ul');
if (hamburger && navUl) {
    hamburger.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });
}

// Smooth scroll for nav links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                e.preventDefault();
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
            });
    });
});