$(window).scroll(function() {
  if ($(document).scrollTop() < 75) {
    $('nav').addClass('bg-transparent');
  } else {
    $('nav').removeClass('bg-transparent');
  }
});
// $(document).ready(function () {
//     $('.dropdown-toggle').mouseover(function() {
//         $('.dropdown-menu').show();
//     })
//     $('.dropdown-toggle').mouseout(function() {
//         t = setTimeout(function() {
//             $('.dropdown-menu').hide();
//         }, 100);
//         $('.dropdown-menu').on('mouseenter', function() {
//             $('.dropdown-menu').show();
//             clearTimeout(t);
//         }).on('mouseleave', function() {
//             $('.dropdown-menu').hide();
//         })
//     })
// })
$(document).ready(function () {
	$('.dropdown-toggle').off('hidden');
	$(document).off('dropdown')
	$('.dropdown-toggle').unbind();
	$('.dropdown-toggle').on("click", function(e) {
    	document.location.href = "file:///C:/Users/maksi/OneDrive/Документы/GitHub/freedom-hotels/room_list.html";
    })
    // $('.dropdown-toggle').mouseover(function() {
    //     $('.dropdown-menu').show();
    // })
    // $('.dropdown-toggle').mouseout(function() {
    //     t = setTimeout(function() {
    //         $('.dropdown-menu').hide();
    //     }, 100);
    //     $('.dropdown-menu').on('mouseenter', function() {
    //         $('.dropdown-menu').show();
    //         clearTimeout(t);
    //     }).on('mouseleave', function() {
    //         $('.dropdown-menu').hide();
    //     })
    // })
})
function aaaaa(){
	const domElements = $('.dropdown-toggle')[0]
	domElements.onclick = function(e) {
    	document.location.href = "file:///C:/Users/maksi/OneDrive/Документы/GitHub/freedom-hotels/room_list.html";
    }
}