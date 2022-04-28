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


//Анимация появления 
const animateOpen = (object) => {
  let count = 0;
  //Начальное положение
  object.style.top = 0 + 'px';
  const animate = () => {
    count++;
    object.style.top = count + 'px';
    if (count < 60) {
      setTimeout(animate, 5);
    }
  };
  animate();
};


export {
  animateOpen,
  resultCalc
};