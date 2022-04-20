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
  for (let item of menuItems){
    item.addEventListener('click', handleMenu);
  }
  //По кнопке Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menu.classList.remove('active-menu');
    }
  });
  
};

export default menu;