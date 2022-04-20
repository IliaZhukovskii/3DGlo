'use strict';


let menu = () => {
  //Получение элементов со страницы
  let menuBtn = document.querySelector('.menu');
  let menu = document.querySelector('menu');
  let closeBtn = menu.querySelector('.close-btn');
  let menuItems = menu.querySelectorAll('ul>li>a');

  //Открытие/закрытие меню
  let handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  //По меню
  menuBtn.addEventListener('click', handleMenu);

  //По кнопке
  closeBtn.addEventListener('click', handleMenu);

  //По пунктам меню
  for (let item of menuItems) {
    item.addEventListener('click', handleMenu);
  }
  //По кнопке Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menu.classList.remove('active-menu');
    }
  });

  //Плавная прокрутка страницы при клике на ссылки
  let animateLinks = document.querySelectorAll('a[href^="#"]');
  for (let link of animateLinks) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      let id = link.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
};

export default menu;