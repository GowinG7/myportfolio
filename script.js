document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");

  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation",
    );
    menuToggle.innerHTML = `<i class="bx ${isOpen ? "bx-x" : "bx-menu"}"></i>`;
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.innerHTML = '<i class="bx bx-menu"></i>';
    });
  });

  const projectToggle = document.getElementById("projectToggle");
  const projectGrid = document.querySelector(".project-grid");

  projectToggle.addEventListener("click", () => {
    const isExpanded = projectGrid.classList.toggle("expanded");
    projectToggle.setAttribute("aria-expanded", String(isExpanded));
    projectToggle.innerHTML = isExpanded
      ? 'Show fewer projects <i class="bx bx-chevron-up"></i>'
      : 'Show more projects <i class="bx bx-chevron-down"></i>';
  });
});
