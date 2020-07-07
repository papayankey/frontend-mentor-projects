function init() {
  // get toggle switch
  let themeToggle = document.querySelector('.theme-toggle input[type="checkbox"]');

  // get and set previous theme
  // from localstorage
  const theme = localStorage.getItem('theme');
  if (theme) {
    theme === "dark" ? themeToggle.checked = 'true' : null;
    document.documentElement.setAttribute('data-theme', theme);
  }

  // toggle light and dark themes
  function switchTheme(event) {
    if (event.target.checked) {
      document.documentElement.setAttribute('data-theme', "dark");
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', "light");
      localStorage.setItem('theme', 'light');
    }

  }

  // listen to toggle switch
  // change event when checked or not
  themeToggle.addEventListener('change', switchTheme);
}

document.addEventListener('DOMContentLoaded', init);
