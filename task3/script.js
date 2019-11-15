'use strict';
(function registationValidation() {
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var button = document.querySelector('.form__button');
  var formError = document.querySelectorAll('.form__error ');
  var formField = document.querySelectorAll('.form__field');

  button.addEventListener('click', function() {
    if (name.value !== '' && /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/.test(name.value)) {
      formError[0].classList.add('form__error_none');
      name.classList.remove('form__input_validation');
      formField[0].classList.remove('form__field_validation');
    } else {
      formError[0].classList.remove('form__error_none');
      name.classList.add('form__input_validation');
      formField[0].classList.add('form__field_validation');
    }

    if (email.value !== '' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      formError[1].classList.add('form__error_none');
      email.classList.remove('form__input_validation');
      formField[1].classList.remove('form__field_validation');
    } else {
      formError[1].classList.remove('form__error_none');
      email.classList.add('form__input_validation');
      formField[1].classList.add('form__field_validation');
    }

    if (password.value !== '' && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password.value)) {
      formError[2].classList.add('form__error_none');
      password.classList.remove('form__input_validation');
      formField[3].classList.remove('form__field_validation');
    } else {
      formError[2].classList.remove('form__error_none');
      password.classList.add('form__input_validation');
      formField[3].classList.add('form__field_validation');
    }
  });
})();