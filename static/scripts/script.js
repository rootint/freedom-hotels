setTimeout(function(){
  document.body.classList.add('body_visible');
}, 100);
$(window).scroll(function(){
   $('#nav').attr('style', 'background-color: rgba(248,249,250,' + 1 / (1 / ($(this).scrollTop() / 50)) + ') !important');
})
$(document).ready(function () {
    $('.dropdown-toggle').mouseover(function() {
        $('.dropdown-menu').fadeIn();
    })
    $('.dropdown-toggle').mouseout(function() {
        t = setTimeout(function() {
            $('.dropdown-menu').fadeOut();
        }, 100);
        $('.dropdown-menu').on('mouseenter', function() {
            $('.dropdown-menu').fadeIn();
            clearTimeout(t);
        }).on('mouseleave', function() {
            $('.dropdown-menu').fadeOut();
        })
    })
})
$(document).ready(function(){
  $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
      } else {
        $('#back-to-top').fadeOut();
      }
    });
    $('#back-to-top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 400);
      return false;
    });
});
function change_language(language) {
  $.post("/change_language", {
    data: JSON.stringify(language)
  })
  window.location.href = "/";
}