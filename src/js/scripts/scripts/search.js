/** @type {HTMLButtonElement} */
const searchOpenButton = document.querySelector('.header__button--search');
/** @type {HTMLButtonElement} */
const searchCloseButton = document.querySelector('.search__close');

if (searchOpenButton && searchCloseButton) {
  searchOpenButton.addEventListener('click', () => {
    searchOpenButton.classList.add('header__button--search--active');
  });

  searchCloseButton.addEventListener('click', () => {
    searchOpenButton.classList.remove('header__button--search--active');
  });

  document.addEventListener('click', (event) => {
    /** @type {{ target: HTMLElement }} */
    const { target } = event;

    if (searchOpenButton.classList.contains('header__button--search--active') && !target.closest('.search, .header__button--search')) {
      searchOpenButton.classList.remove('header__button--search--active');
    }
  });

  document.addEventListener('keydown', (event) => {
    const { key } = event;

    if (searchOpenButton.classList.contains('header__button--search--active') && key === 'Escape') {
      searchOpenButton.classList.remove('header__button--search--active');
    }
  });
}
