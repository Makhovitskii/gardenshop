$(function() {

    //Работа с плагином ANIMATE ON SCROLL
    AOS.init({
		once : true,
        duration : 1000,
        offset : 250
	});
    //Конец работы с плагином ANIMATE ON SCROLL

    var $mainNav = $(".main-nav");


    $(".herobanner-slider").slick({
        arrows: false
	});

	$(".main-nav__item").on("click", function () {
		$(this).addClass('is-active').siblings().removeClass('is-active');
    });

	$(".js-testimonials-slider").slick({
		arrows:false
	});

	$(window).on("scroll", function () {
		if ($(this).scrollTop() > $(this).height()) {
            $mainNav.addClass('is-sticky');
		}
		else{
            $mainNav.removeClass('is-sticky');
		}
    });


});
