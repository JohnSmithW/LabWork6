'use strict';


(function registationValidation() {
  window.onsubmit = function() {
    return false;
  };
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var button = document.querySelector('.form__button');
  var formErrorName = document.querySelector('.form-field_name .form-field__error');
  var formFieldName = document.querySelector('.form-field_name .form-field__label');
  var formErrorEmail = document.querySelector('.form-field_email .form-field__error');
  var formFieldEmail = document.querySelector('.form-field_email .form-field__label');
  var formErrorPassword = document.querySelector('.form-field_password .form-field__error');
  var formFieldPassword = document.querySelector('.form-field_password .form-field__label');



  button.addEventListener('click', function() {


    if (name.value !== '' && /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/.test(name.value)) {
      formErrorName.classList.add('form-field__error_visible');
      name.classList.remove('form__input_validation');
      formFieldName.classList.remove('form-field__label_validation');
    } else {
      formErrorName.classList.remove('form-field__error_visible');
      name.classList.add('form__input_validation');
      formFieldName.classList.add('form-field__label_validation');
    }

    if (email.value !== '' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      formErrorEmail.classList.add('form-field__error_visible');
      email.classList.remove('form__input_validation');
      formFieldEmail.classList.remove('form-field__label_validation');
    } else {
      formErrorEmail.classList.remove('form-field__error_visible');
      email.classList.add('form__input_validation');
      formFieldEmail.classList.add('form-field__label_validation');
    }

    if (password.value !== '' && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password.value)) {
      formErrorPassword.classList.add('form-field__error_visible');
      password.classList.remove('form__input_validation');
      formFieldPassword.classList.remove('form-field__label_validation');
    } else {
      formErrorPassword.classList.remove('form-field__error_visible');
      password.classList.add('form__input_validation');
      formFieldPassword.classList.add('form-field__label_validation');
    }
  });
})();
