// Toggle mobile menu
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️';
  } else {
    darkModeToggle.textContent = '🌙';
  }
});

// Optional: Close menu on link click for mobile UX
document.querySelectorAll('.nav-links a').forEach(link =>
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    }
  })
);
