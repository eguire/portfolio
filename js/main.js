
$(function(){
	var mixer = mixitup('.portfolio');
});

	$('.burger').on('click', function(){
		$('.burger').toggleClass('burger--active');
		$('.menu__list').toggleClass('menu__list--active');
		$('body').toggleClass('scroll-lock');
	});