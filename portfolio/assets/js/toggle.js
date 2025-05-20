  function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
  }
  // Auto close the menu when a nav link is clicked (on mobile/tablet)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const nav = document.getElementById("navLinks");
      // Only hide if screen width <= 1023px (mobile/tablet)
      if (window.innerWidth <= 1023) {
        nav.classList.remove("show");
      }
    });
  });
