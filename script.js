// Project video interactivity: play on hover, pause on mouseout
const videos = document.querySelectorAll('.project-vidbox video');
const hoverSign = document.querySelector('.hover-sign');

if (videos.length && hoverSign) {
    videos.forEach(video => {
        video.addEventListener('mouseenter', () => {
            video.play();
            hoverSign.classList.add('active');
        });
        video.addEventListener('mouseleave', () => {
            video.pause();
            hoverSign.classList.remove('active');
        });
    });
}

// Sidebar elements
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');

if (menu && sideBar) {
    menu.addEventListener('click', () => {
        sideBar.classList.remove('close-sidebar');
        sideBar.classList.add('open-sidebar');
    });
}
if (close && sideBar) {
    close.addEventListener('click', () => {
        sideBar.classList.remove('open-sidebar');
        sideBar.classList.add('close-sidebar');
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