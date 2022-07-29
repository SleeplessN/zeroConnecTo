(function () {
  'use strict';

  var darkScheme = '(prefers-color-scheme: dark)';
  var isOSDarkMode = window.matchMedia && window.matchMedia(darkScheme).matches;

  var htmlNode = document.documentElement;
  var logo = document.querySelector('.logo');
  var logoImg = logo.querySelector('img');
  var logoPic = logo.querySelector('picture');
  var toggleThemeButton = document.querySelector('.toggle-theme-button');

  function init() {
    if (isOSDarkMode) {
      toggleThemeButton.hidden = true;
      htmlNode.classList.add('dark');
    }

    window.matchMedia(darkScheme).addEventListener('change', function (e) {
      logoPic.insertAdjacentHTML(
        'afterbegin',
        [
          '<source srcset="./images/fastcampus-logo-dark.png" media="(prefers-color-scheme: dark)" />',
          '<source srcset="./images/fastcampus-logo.png" media="(prefers-color-scheme: light)" />',
        ].join('')
      );
      const theme = e.matches ? 'dark' : 'light';
      if (theme === 'dark') {
        toggleThemeButton.hidden = true;
        htmlNode.classList.add('dark');
      } else {
        toggleThemeButton.hidden = false;
        htmlNode.classList.remove('dark');
      }
    });

    toggleThemeButton.addEventListener('click', toggleTheme);
  }

  function toggleTheme() {
    htmlNode.classList.toggle('dark');

    logoPic.querySelectorAll('source').forEach(function (sourceElement) {
      sourceElement.remove();
    });

    if (htmlNode.classList.contains('dark')) {
      logoImg.setAttribute('src', './images/fastcampus-logo-dark.png');
      toggleThemeButton.textContent = '라이트모드 보기';
    } else {
      logoImg.setAttribute('src', './images/fastcampus-logo.png');
      toggleThemeButton.textContent = '다크모드 보기';
    }
  }

  init();
})();
