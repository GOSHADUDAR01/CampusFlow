/* ОСНОВНАЯ РАБОТА: реализуйте переключение темы без библиотеки.
 * "auto" означает отсутствие атрибута data-theme у <html>.
 * В таком случае тёмную тему применяет CSS media query.
 * Настройку нужно сохранять в localStorage (ключ "atlas-theme").
 */
const root = document.documentElement;
const themeSelect = document.querySelector('#theme-select');
const densitySelect = document.querySelector('#density-select');
const demoAction = document.querySelector('#demo-action');
const demoFeedback = document.querySelector('#demo-feedback');

const themeChoices = ['auto', 'light', 'dark'];
const densityChoices = ['comfortable', 'compact'];
const themeStorageKey = 'atlas-theme';
const densityStorageKey = 'atlas-density';

function readPreference(key, choices, fallback) {
  try {
    const savedChoice = localStorage.getItem(key);
    return choices.includes(savedChoice) ? savedChoice : fallback;
  } catch {
    return fallback;
  }
}

function savePreference(key, choice) {
  try {
    localStorage.setItem(key, choice);
  } catch {
    // The controls still work for this page when browser storage is unavailable.
  }
}

function applyTheme(choice) {
  const theme = themeChoices.includes(choice) ? choice : 'auto';
  if (theme === 'auto') {
    root.removeAttribute('data-theme');
  } else {
    root.dataset.theme = theme;
  }
  themeSelect.value = theme;
  return theme;
}

function applyDensity(choice) {
  const density = densityChoices.includes(choice) ? choice : 'comfortable';
  if (density === 'compact') {
    root.dataset.density = density;
  } else {
    root.removeAttribute('data-density');
  }
  densitySelect.value = density;
  return density;
}

applyTheme(readPreference(themeStorageKey, themeChoices, 'auto'));
applyDensity(readPreference(densityStorageKey, densityChoices, 'comfortable'));

themeSelect.addEventListener('change', () => {
  savePreference(themeStorageKey, applyTheme(themeSelect.value));
});

densitySelect.addEventListener('change', () => {
  savePreference(densityStorageKey, applyDensity(densitySelect.value));
});

/* Обратная связь от кнопки — уже готова. */
demoAction.addEventListener('click', () => {
  demoFeedback.textContent = 'Демонстрация: действие выполнено, новая заявка создана.';
});
