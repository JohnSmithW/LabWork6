'use strict';

var name = document.getElementById('name');
var email = document.getElementById('email');
var city = document.getElementById('city');
var password = document.getElementById('password');
var button = document.querySelector('.form__button');

button.addEventListener('submit', function() {
  if (name.value === '' && name.value !== /[A-Za-z\s]+$/) {
    name.classList.add('form__input_validation');
    return false;
  }
});