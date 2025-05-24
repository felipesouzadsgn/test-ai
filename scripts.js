document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle-button');
  const targetElement = document.documentElement; // Target <html> element
  const darkThemeClass = 'bootstrap-dark'; // Class for the dark theme

  // Function to apply theme based on preference
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      targetElement.classList.add(darkThemeClass);
      themeToggleButton.textContent = 'Light Mode'; 
      // For Font Awesome icons:
      // themeToggleButton.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
      targetElement.classList.remove(darkThemeClass);
      themeToggleButton.textContent = 'Dark Mode';
      // For Font Awesome icons:
      // themeToggleButton.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
  };

  // Check for saved theme preference on load
  // Default to 'light' if no preference or if stored value is invalid
  let savedTheme = localStorage.getItem('theme');
  if (savedTheme !== 'dark' && savedTheme !== 'light') {
    savedTheme = 'light'; // Default to light for safety
  }
  applyTheme(savedTheme);


  // Event listener for the toggle button
  themeToggleButton.addEventListener('click', () => {
    let newTheme;
    if (targetElement.classList.contains(darkThemeClass)) {
      newTheme = 'light';
    } else {
      newTheme = 'dark';
    }
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
});
