'use strict';


let menu = () => {
  //Получение элементов со страницы
  let menu = document.querySelector('menu');

  //Открытие/закрытие меню
  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };


  document.addEventListener('click', e => {
    //Закрытие по кнопке, пункту меню
    if (e.target.closest('.menu') ||
      e.target.classList.contains('close-btn') ||
      e.target.closest('menu>ul>li>a')){
      handleMenu();
    }

    //Закрытие по клику вне меню
    if(!e.target.closest('.menu')){
      menu.classList.remove('active-menu');
    }

    //Плавный переход по ссылкам
    if (e.target.closest('a[href^="#"]')) {
      e.preventDefault();
      let id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
};

export default menu;