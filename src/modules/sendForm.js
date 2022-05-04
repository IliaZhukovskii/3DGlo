const sendForm = ({
  formId,
  someElem = []
}) => {
  let form = document.getElementById(formId);
  let phone = form.user_phone;
  let email = form.user_email;
  let emailExample = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let statusBlock = document.createElement('div');
  let loadText = 'Загрузка...';
  let errorText = 'Ошибка...';
  let successText = 'Спасибо! Наш менеджер с Вами свяжется';



  //функция на валидность email и номера телефона
  const validate = (list) => {
    let success = true;
    let phoneLength = form.user_phone.value.length;
    for (let i of list) {
      if (i.value == '' || phoneLength < 7 || !email.value.match(emailExample)) {
        success = false;
      }
    }
    return success;
  };

  //Отправка данных
  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    }).then(res => res.json());
  };

  //Отправка формы
  const submitForm = () => {
    let formElements = form.querySelectorAll('input');
    let formData = new FormData(form);
    let FormBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      FormBody[key] = val;
    });

    someElem.forEach(elem => {
      let element = document.getElementById(elem.id);

      if (elem.type === 'block') {
        FormBody[elem.id] = element.textContent;
      } else if (e.type === 'input') {
        FormBody[elem.id] = element.value;
      }
    });

    //Проверка и отправка формы
    if (validate(formElements)) {
      sendData(FormBody)
        .then(data => {
          statusBlock.textContent = successText;
          formElements.forEach(input => {
            input.value = '';
          });
        })
        .catch(error => {
          statusBlock.textContent = errorText;
        });
      if (form.matches('.inputError')) {
        console.log('aaa');
      }
    }
  };

  try {
    if (!form) {
      throw new Error('Верните форму');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submitForm();
    });

  } catch (error) {
    console.log(error.message);
  }

  //Подсказки для правильного ввода email и номера телефона
  let formElements = form.querySelectorAll('input');
  for (let i of formElements) {
    if (i.matches('.form-phone')) {
      i.addEventListener('input', () => {
        if (phone.value.length < 7) {
          let phoneError = document.querySelector('.phoneError');
          if (phoneError) {
            phoneError.remove();
          }
          phone.insertAdjacentHTML('afterEnd', '<label for="user_phone" class="phoneError" style="color:red; font-size: 15px;">Не менее 7 цифр</label>');
        } else if (phone.value.length > 6) {
          let phoneError = document.querySelector('.phoneError');
          phoneError.remove();
        }
      });
    } else if (i.matches('.form-email')) {
      i.addEventListener('input', () => {
        if (!email.value.match(emailExample)) {
          let emailError = document.querySelector('.emailError');
          if (emailError) {
            emailError.remove();
          }
          email.insertAdjacentHTML('afterEnd', '<label for="user_phone" class="emailError" style="color:red; font-size: 15px;" >Пример: example@mail.ru</label>');
        } else if (email.value.match(emailExample)) {
          let emailError = document.querySelector('.emailError');
          if (emailError) {
            emailError.remove();
          }
        }
      });
    }
  }
};

export default sendForm;