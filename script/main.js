//preloader
$(window).on('load', function(){
  $('.preloader').delay(2000).fadeOut('slow',);
});

//sound play
$('.down__btn').on('click', function breakDownWord() {
  let breakDown = document.querySelector('.break__down');
  if (breakDown.paused) {
    breakDown.play();
    /*breakDown = setTimeout(breakDownWord, 8000);*/
  } else {
    breakDown.pause();
    breakDown.removeAttribute('loop', 'loop');
  }
});

$('.in__btn').on('click', function breakInWord() {
  let breakIn = document.querySelector('.break__in');
  if (breakIn.paused) {
    breakIn.play();
    /*breakIn = setTimeout(breakInWord, 8000);*/
  } else {
    breakIn.pause();
    breakIn.removeAttribute('loop', 'loop');
  }
});

$('.into__btn').on('click', function breakIntoWord() {
  let breakInto = document.querySelector('.break__into');
  if (breakInto.paused) {
    breakInto.play();
    /*breakInto = setTimeout(breakIntoWord, 8000);*/
  } else {
    breakInto.pause();
    breakInto.removeAttribute('loop', 'loop');
  }
});

$('.off__btn').on('click', function breakOffWord() {
  let breakOff = document.querySelector('.break__off');
  if (breakOff.paused) {
    breakOff.play();
    /*breakOff = setTimeout(breakOffWord, 8000);*/
  } else {
    breakOff.pause();
    breakOff.removeAttribute('loop', 'loop');
  }
});

$('.out__btn').on('click', function breakOutWord() {
  let breakOut = document.querySelector('.break__out');
  if (breakOut.paused) {
    breakOut.play();
    /*breakOut = setTimeout(breakOutWord, 8000);*/
  } else {
    breakOut.pause();
    breakOut.removeAttribute('loop', 'loop');
  }
});
 
$('.trough__btn').on('click', function breakTroughWord() {
  let breakTrough = document.querySelector('.break__trough');
  if (breakTrough.paused) {
    breakTrough.play();
    /*breakTrough = setTimeout(breakTroughWord, 8000);*/
  } else {
    breakTrough.pause();
    breakTrough.removeAttribute('loop', 'loop');
  }
});
 
