document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navUl = document.querySelector('header nav ul');
  const closeBtn = document.getElementById('closeNavBtn');

  if (hamburger && navUl) {
    hamburger.addEventListener('click', () => {
      navUl.classList.toggle('active');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      navUl.classList.remove('active');
    });
  }

  // Close menu on link click (only on mobile)
  document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 700) {
        navUl.classList.remove('active');
      }
    });
  });

  // Smooth scroll for nav links
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