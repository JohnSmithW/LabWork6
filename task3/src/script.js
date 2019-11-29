'use strict';


(function registationValidation() {
  window.onsubmit = function() {
    return false;
  };
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var button = document.querySelector('.form__button');
  var formErrorName = document.querySelector('.form-field__error_name');
  var formErrorEmail = document.querySelector('.form-field__error_email');
  var formErrorPassword = document.querySelector('.form-field__error_password');
  var formField = document.querySelectorAll('.form-field__label');

  button.addEventListener('click', function() {
    if (name.value !== '' && /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/.test(name.value)) {
      formErrorName.classList.add('form-field__error_visible');
      name.classList.remove('form__input_validation');
      formField[0].classList.remove('form-field__label_validation');
    } else {
      formErrorName.classList.remove('form-field__error_visible');
      name.classList.add('form__input_validation');
      formField[0].classList.add('form-field__label_validation');
    }

    if (email.value !== '' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      formErrorEmail.classList.add('form-field__error_visible');
      email.classList.remove('form__input_validation');
      formField[1].classList.remove('form-field__label_validation');
    } else {
      formErrorEmail.classList.remove('form-field__error_visible');
      email.classList.add('form__input_validation');
      formField[1].classList.add('form-field__label_validation');
    }

    if (password.value !== '' && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password.value)) {
      formErrorPassword.classList.add('form-field__error_visible');
      password.classList.remove('form__input_validation');
      formField[3].classList.remove('form-field__label_validation');
    } else {
      formErrorPassword.classList.remove('form-field__error_visible');
      password.classList.add('form__input_validation');
      formField[3].classList.add('form-field__label_validation');
    }
  });
})();


function interlocutorMessage(text) {
  var newComment = document.createElement('div');
  newComment.className = 'message-container message-container_interlocutor';
  newComment.innerHTML = '<p class="user-message">' + text + '</p><span class="user-name user-name_interlocutor">Interlocutor</span>';
  document.querySelector('.message-box').appendChild(newComment);
  comment.value = '';
}



function userCommentAppend(role, text) {


  if (text !== '' && !(/^\s+$/.test(text)) && role === 'user') {
    userMessage(text);
  }
  if (text !== '' && !(/^\s+$/.test(text)) && role === 'interlocutor') {
    interlocutorMessage(text);
  }
}


button.onclick = function() {
  userCommentAppend('user', comment.value);
};
