'use strict';

//Анимация вывода результата калькулятора
const resultCalc = (totalValue, total) => {
  let n = 0;
  let interval = 0;
  interval = setInterval(() => {
    if (n < totalValue) {
      if (totalValue < 500) {
        n += 1;
      } else {
        n += 20;
        //Иначе очень долго приходиться ждать
      }
      total.innerHTML = n;
    }
  }, 0.0000000001);
};


//Анимация появления модального окна
  const animateOpen = (object, count = 0) => {
    count++;
    object.style.top = count + 'px';
    if (count < 60) {
      setTimeout(animateOpen, 5);
    }
  };


export {
  animateOpen,
  resultCalc
};