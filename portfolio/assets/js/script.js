// Toggle menu on small screens
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("open");
}

// Highlight active link on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");
  const links = document.querySelectorAll(".nav-link");
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
