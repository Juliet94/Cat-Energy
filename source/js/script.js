const mainMenu = document.querySelector('.page-header');
const buttonToggle = document.querySelector('.page-header__toggle');

mainMenu.classList.remove('page-header--menu-nojs');
mainMenu.classList.add('page-header--menu-closed');

buttonToggle.addEventListener('click', function () {
  mainMenu.classList.toggle('page-header--menu-closed');
  mainMenu.classList.toggle('page-header--menu-open');
})

