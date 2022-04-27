'use strict';

const calc = (price) => {

  //Получение переменных
  let calcBlock = document.querySelector('.calc-block');
  let calcType = document.querySelector('.calc-type');
  let calcSquare = document.querySelector('.calc-square');
  let calcCount = document.querySelector('.calc-count');
  let calcDay = document.querySelector('.calc-day');
  let total = document.getElementById('total');
  let totalValue = 0;

  //Вычисление итоговой стоимости
  const countCalc = () => {
    let calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    let calcSquareValue = calcSquare.value;
    let calcCountValue = 1;
    let calcDayValue = 1;

    //Переопределение коэффициентов
    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }
    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    //Итоговая стоимость
    if (calcTypeValue && calcSquareValue) {
      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }
  };

  //Вывод результата
  const out = () => {
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

  //Проверка на изменение инпутов калькулятора
  calcBlock.addEventListener('change', (e) => {
    if (e.target === calcType || e.target === calcSquare ||
      e.target === calcCount || e.target === calcDay) {
      countCalc();
      out();
    }
  });
};

export default calc;