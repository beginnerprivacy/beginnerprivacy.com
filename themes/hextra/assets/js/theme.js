// Light / Dark theme toggle
(function () {
  const defaultTheme = '{{ site.Params.theme.default | default `system`}}'

  const themeToggleButtons = document.querySelectorAll(".theme-toggle");

  // Change the icons of the buttons based on previous settings or system theme
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      ((window.matchMedia("(prefers-color-scheme: dark)").matches && defaultTheme === "system") || defaultTheme === "dark"))
  ) {
    themeToggleButtons.forEach((el) => el.dataset.theme = "dark");
  } else {
    themeToggleButtons.forEach((el) => el.dataset.theme = "light");
  }

  // Add click event handler to the buttons
  themeToggleButtons.forEach((el) => {
    el.addEventListener("click", function () {
      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          setDarkTheme();
          localStorage.setItem("color-theme", "dark");
        } else {
          setLightTheme();
          localStorage.setItem("color-theme", "light");
        }
      } else {
        if (document.documentElement.classList.contains("dark")) {
          setLightTheme();
          localStorage.setItem("color-theme", "light");
        } else {
          setDarkTheme();
          localStorage.setItem("color-theme", "dark");
        }
      }
      el.dataset.theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    });
  });

  // Listen for system theme changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (defaultTheme === "system" && !("color-theme" in localStorage)) {
      e.matches ? setDarkTheme() : setLightTheme();
      themeToggleButtons.forEach((el) =>
        el.dataset.theme = document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    }
  });
})();

// Footer waves color
function updateWaveColors(selector) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const waves = document.querySelectorAll(`${selector} .wave`);
  if (waves.length > 0) {
    if (isDarkMode) {
      waves[0].setAttribute('fill', 'rgba(50, 50, 50, 0.7)');
      waves[1].setAttribute('fill', 'rgba(50, 50, 50, 0.5)');
      waves[2].setAttribute('fill', 'rgba(50, 50, 50, 0.3)');
      waves[3].setAttribute('fill', '#171717');
    } else {
      waves[0].setAttribute('fill', 'rgba(243,244,246, 0.7)');
      waves[1].setAttribute('fill', 'rgba(243,244,246, 0.5)');
      waves[2].setAttribute('fill', 'rgba(243,244,246, 0.3)');
      waves[3].setAttribute('fill', '#e8e9eb');
    }
  }
}
updateWaveColors('.hero-waves');
updateWaveColors('.footer-waves');

const observer = new MutationObserver(() => {
  updateWaveColors('.hero-waves');
  updateWaveColors('.footer-waves');
});
observer.observe(document.documentElement, {
  attributes: true
});