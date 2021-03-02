$(document).ready(function() {
	$('.header__burger').click( function(event) {
		$('.header__burger,.menu__list').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.menu__item').click( function(event) {
		if(screen.width <= 760)$('.header__burger,.menu__list').removeClass('active');
	});
	$(".menu__list").on("click","a", function (event) {
		event.preventDefault();
		let id  = $(this).attr('href'),
			 top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
  });
});

