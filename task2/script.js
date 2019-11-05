(function messageCreator() {
  var button = document.querySelector('.input-box__button');
  var comment = document.querySelector('.input-box__text');
  var appearTime = setTimeout(commentBot, 2000);


  button.addEventListener('click', function userCommentAppend() {
    if (comment.value != '') {
      var newComment = document.createElement('div');
      newComment.className = 'message-container message-container_user';
      var userComment = document.createElement('p');
      userComment.className = 'user-message';
      var userName = document.createElement('span');
      userName.className = 'user-name user-name_user';
      userName.innerHTML = 'You';
      userComment.innerHTML = comment.value;
      document.querySelector('.message-box').appendChild(newComment);
      newComment.appendChild(userName);
      newComment.appendChild(userComment);
      comment.value = '';
    }
  });


  function commentBot() {
    var newBotComment = document.createElement('div');
    newBotComment.className = 'message-container message-container_interlocutor';
    var interlocutorName = document.createElement('span');
    interlocutorName.className = 'user-name user-name_interlocutor';
    var interlocutorComment = document.createElement('p');
    interlocutorComment.className = 'user-message';
    interlocutorName.innerHTML = 'Interlocutor';
    interlocutorComment.innerHTML = 'Hey there!';
    document.querySelector('.message-box').appendChild(newBotComment);
    newBotComment.appendChild(interlocutorName);
    newBotComment.appendChild(interlocutorComment);
  }
})();