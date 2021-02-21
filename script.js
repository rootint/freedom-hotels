$(window).scroll(function() {
  if ($(document).scrollTop() < 75) {
    $('nav').addClass('bg-transparent');
  } else {
    $('nav').removeClass('bg-transparent');
  }
});