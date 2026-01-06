// Dark Mode 
document.addEventListener('DOMContentLoaded', function () {

    createThemeToggleButton();

    const savedMode = localStorage.getItem('darkMode');
    const isDarkMode = savedMode === null || savedMode === 'true';

    document.body.classList.toggle('dark-mode', isDarkMode);

    updateToggleButton(isDarkMode);
    updateLogo(isDarkMode);
});

function createThemeToggleButton() {
    if (document.getElementById('themeToggle')) return;

    const toggleButton = document.createElement('button');
    toggleButton.id = 'themeToggle';
    toggleButton.className = 'theme-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle Dark Mode');

    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', toggleDarkMode);
}

function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');

    localStorage.setItem('darkMode', isDarkMode);

    updateToggleButton(isDarkMode);
    updateLogo(isDarkMode);
}

function updateToggleButton(isDarkMode) {
    const toggleButton = document.getElementById('themeToggle');
    if (!toggleButton) return;

    toggleButton.innerHTML = isDarkMode
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon text-dark"></i>';

    toggleButton.title = isDarkMode
        ? 'Switch to Light Mode'
        : 'Switch to Dark Mode';
}

function updateLogo(isDarkMode) {
    const logo = document.getElementById('siteLogo');
    if (!logo) return;

    logo.src = isDarkMode
        ? 'img/logo-light.png'
        : 'img/logo-dark.png';
}
