var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__nav button');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('header__nav--closed')) {
    navMain.classList.remove('header__nav--closed');
    navMain.classList.add('header__nav--opened');
  } else {
    navMain.classList.add('header__nav--closed');
    navMain.classList.remove('header__nav--opened');
  }
});


var modalMain = document.querySelector('.modal-overlay');
var modalToggle = document.querySelector('.js-open-modal');
var modalForm = document.querySelector('.modal-add');

modalToggle.addEventListener('click', function() {
  modalMain.classList.remove('modal-overlay--inactive');
  modalMain.classList.add('modal-overlay--active');
  modalForm.classList.remove('modal-add--inactive');
  modalForm.classList.add('modal-add--active');
});

modalMain.addEventListener('click', function() {
  modalMain.classList.add('modal-overlay--inactive');
  modalMain.classList.remove('modal-overlay--active');
  modalForm.classList.add('modal-add--inactive');
  modalForm.classList.remove('modal-add--active');
});
