//preloader
$(window).on('load', function(){
  $('.preloader').delay(2000).fadeOut('slow',);
});

//sound play
$(document).on('click', '.down__btn', function() {
  let breakDown = document.querySelector('.break__down');
  if (breakDown.paused) {
    breakDown.play();
    /*breakDown = setTimeout(breakDownWord, 8000);*/
  } else {
    breakDown.pause();
  }
});


$(document).on('click', '.in__btn', function () {
  let breakIn = document.querySelector('.break__in');
  if (breakIn.paused) {
    breakIn.play();
    /*breakIn = setTimeout(breakInWord, 8000);*/
  } else {
    breakIn.pause();
  }
});

$(document).on('click', '.into__btn', function () {
  let breakInto = document.querySelector('.break__into');
  if (breakInto.paused) {
    breakInto.play();
    /*breakInto = setTimeout(breakIntoWord, 8000);*/
  } else {
    breakInto.pause();
  }
});

$(document).on('click', '.off__btn', function () {
  let breakOff = document.querySelector('.break__off');
  if (breakOff.paused) {
    breakOff.play();
    /*breakOff = setTimeout(breakOffWord, 8000);*/
  } else {
    breakOff.pause();
  }
});

$(document).on('click', '.out__btn', function () {
  let breakOut = document.querySelector('.break__out');
  if (breakOut.paused) {
    breakOut.play();
    /*breakOut = setTimeout(breakOutWord, 8000);*/
  } else {
    breakOut.pause();
  }
});

 
$(document).on('click', '.trough__btn', function () {
  let breakTrough = document.querySelector('.break__trough');
  if (breakTrough.paused) {
    breakTrough.play();
    /*breakTrough = setTimeout(breakTroughWord, 8000);*/
  } else {
    breakTrough.pause();
  }
});
 
