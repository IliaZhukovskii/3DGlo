const sendForm = ({
  formId,
  someElem = []
}) => {
  let form = document.getElementById(formId);
  let statusBlock = document.createElement('div');
  let loadText = 'Загрузка...';
  let errorText = 'Ошибка...';
  let successText = 'Спасибо! Наш менеджер с Вами свяжется';


  //функция на валидность email и номера телефона
  const validate = (list) => {
    let success = true;

    let email = form.user_email.value;
    let phone = form.user_phone.value.length;
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    for (let i of list) {
      if (i.value == '' || phone < 7 || !email.match(pattern)) {
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
    } else {
      alert('Данные не валидны!');
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
};

export default sendForm;