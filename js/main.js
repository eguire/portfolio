
$(function(){
	var mixer = mixitup('.portfolio');
});

	$('.burger').on('click', function(){
		$('.burger').toggleClass('burger--active');
		$('.menu__list').toggleClass('menu__list--active');
		$('body').toggleClass('scroll-lock');
	});

	$(window).scroll(function(){
		if ($(window).scrollTop() >=menuHeight) {
			$('.menu').addClass('sticky')
		} else {
			$('.menu').removeClass('sticky')
		}
	});

	const headerHeight = $('.header').outerHeight();

	$('.menu__link, .logo, .header__arrow').on('click', function(e){
		e.preventDefault();

		const scrollAnchor = $(this).attr('href');

		let scrollPoint = $(scrollAnchor).offset().top - menuHeight;

		$('html, body').animate({
			scrollTop: scrollPoint
		}, 1000);
	});

	const menuHeight = $('.menu').outerHeight();