(function () {
  'use strict';

  function installEventHandler(selector, type, eventHandler) {
    var domOBJ = document.querySelector(selector);
    domOBJ.addEventListener(type, eventHandler);
  }

  function onClickOpen() {
    modal.style.display = 'block';
  }

  function onClickClose() {
    modal.style.display = 'none';
  }

  // if we click outside (close)
  window.addEventListener('click', function(e) {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  })

  // Get the modal, button and span
  var modal = document.getElementById('myModal'),
    btn = document.getElementById('myBtn'),
    span = document.querySelector('.close');

  installEventHandler('#myBtn', 'click', onClickOpen);
  installEventHandler('.close', 'click', onClickClose);

})();
