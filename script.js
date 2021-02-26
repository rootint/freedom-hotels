$(window).scroll(function() {
  if ($(document).scrollTop() < 75) {
    $('nav').addClass('bg-transparent');
  } else {
    $('nav').removeClass('bg-transparent');
  }
});
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
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});