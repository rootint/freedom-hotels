$(window).scroll(function() {
  if ($(document).scrollTop() < 75) {
    $('nav').addClass('bg-transparent');
  } else {
    $('nav').removeClass('bg-transparent');
  }
});
$(document).ready(function () {
    $('.dropdown-toggle').mouseover(function() {
        $('.dropdown-menu').show();
    })
    $('.dropdown-toggle').mouseout(function() {
        t = setTimeout(function() {
            $('.dropdown-menu').hide();
        }, 100);
        $('.dropdown-menu').on('mouseenter', function() {
            $('.dropdown-menu').show();
            clearTimeout(t);
        }).on('mouseleave', function() {
            $('.dropdown-menu').hide();
        })
    })
})

function change_language(language) {
  $.post("/change_language", {
    data: JSON.stringify(language)
  })
  window.location.href = "/";
}