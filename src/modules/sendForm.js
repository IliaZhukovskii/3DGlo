const sendForm = ({
  formId,
  someElem = []
}) => {
  let form = document.getElementById(formId);
  let statusBlock = document.createElement('div');
  let loadText = 'Загрузка...';
  let errorText = 'Ошибка...';
  let successText = 'Спасибо! Наш менеджер с Вами свяжется';

  let inputPhone = form.user_phone;
  let inputName = form.user_name;
  let inputMessage = form.user_message;


  const validate = (list) => {

    inputPhone = inputPhone.value.replace(/[^\d()-+]/g, "");

    let success = true;

    list.forEach(input => {
      if (input.classList.contains('success')) {
        success = false;
      }
    });




    return success;
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    }).then(res => res.json());
  };

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