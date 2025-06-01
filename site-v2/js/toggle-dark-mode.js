// Experimental dark mode script

// Check and apply system or stored theme preference
(function initializeTheme() {
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})();

// Toggle theme manually
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('darkToggle');
  if (!toggleButton) return;

  toggleButton.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});

