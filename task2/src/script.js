'use strict';


window.onsubmit = function() {
  return false;
};

var button = document.querySelector('.input-box__button');
var comment = document.querySelector('.input-box__text');



function userMessage(text) {
  var newComment = document.createElement('div');
  newComment.className = 'message-container message-container_user';
  newComment.innerHTML = '<p class="user-message">' + text + '</p><span class="user-name user-name_user">You</span>';
  document.querySelector('.message-box').appendChild(newComment);
  comment.value = '';
}


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
