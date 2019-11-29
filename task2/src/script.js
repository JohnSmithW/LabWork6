'use strict';


var button = document.querySelector('.input-box__button');
var comment = document.querySelector('.input-box__text');


function userMessage(text) {
  var newComment = document.createElement('div');
  newComment.className = 'message-container message-container_user';
  var userComment = document.createElement('p');
  userComment.className = 'user-message';
  var userName = document.createElement('span');
  userName.className = 'user-name user-name_user';
  userName.innerHTML = 'You';
  userComment.innerHTML = text;
  document.querySelector('.message-box').appendChild(newComment);
  newComment.appendChild(userName);
  newComment.appendChild(userComment);
  comment.value = '';
};


function interlocutorMessage(text) {
  var newCommentInterlocutor = document.createElement('div');
  newCommentInterlocutor.className = 'message-container message-container_interlocutor';
  var interlocutorName = document.createElement('span');
  interlocutorName.className = 'user-name user-name_interlocutor';
  var interlocutorComment = document.createElement('p');
  interlocutorComment.className = 'user-message';
  interlocutorName.innerHTML = 'Interlocutor';
  interlocutorComment.innerHTML = text;
  document.querySelector('.message-box').appendChild(newCommentInterlocutor);
  newCommentInterlocutor.appendChild(interlocutorName);
  newCommentInterlocutor.appendChild(interlocutorComment);
  comment.value = '';
}



function userCommentAppend(role, text) {


  if (text !== '' && !(/^\s+$/.test(text)) && role === 'user') {
    userMessage(text)
  }
  if (text !== '' && !(/^\s+$/.test(text)) && role === 'interlocutor') {
    interlocutorMessage(text)
  }
}


button.onclick = function() {
  userCommentAppend('user', comment.value);
};