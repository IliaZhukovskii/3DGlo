'use strict';

let modal = () => {
  //Получение элементов со страницы
  let modal = document.querySelector('.popup');
  let buttons = document.querySelectorAll('.popup-btn');
  let closeBtn = modal.querySelector('.popup-close');
  let modalContent = modal.querySelector('.popup-content');
  let mediaQuery = window.matchMedia('(min-width: 768px)');

  let count = 0;
  //Начальное положение модального окна
  modalContent.style.top = 0 + 'px';

  //Анимация появления модального окна
  let animateOpen = () => {
    count++;
    modalContent.style.top = count + 'px';
    if (count < 60) {
      setTimeout(animateOpen, 5);
    }
  };

  //Открытие модального окна
  for (let btn of buttons) {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
      if (mediaQuery.matches) {
        animateOpen();
      }
    });
  }

  //Закрытие модального окна
  let closeModal = () => {
    modal.style.display = 'none';
    count = 0;
  };
  //Закрытие по кнопке
  closeBtn.addEventListener('click', () => {
    closeModal();
  });
  
  //Закрытие по клику вне окна
  modal.addEventListener('click', (e) => {
    if ( e.target.className != 'popup-content' ) {
        closeModal();
    };
  });

  //Закрытие по кнопке Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
};

export default modal;