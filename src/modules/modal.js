'use strict';

let modal = () => {
  //Получение элементов со страницы
  let modal = document.querySelector('.popup');
  let buttons = document.querySelectorAll('.popup-btn');
  let modalContent = modal.querySelector('.popup-content');
  let mediaQuery = window.matchMedia('(min-width: 768px)');

  let count = 0;
  //Начальное положение модального окна
  modalContent.style.top = 0 + 'px';

  //Анимация появления модального окна
  const animateOpen = () => {
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
  const closeModal = () => {
    modal.style.display = 'none';
    count = 0;
  };

  //Закрытие по кнопке и клику вне окна
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup') || e.target.classList.contains('popup-close')) {
      closeModal();
    }
  });

  //Закрытие по кнопке Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
};

export default modal;