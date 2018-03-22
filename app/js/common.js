$(function() {

    AOS.init();


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
			$(".main-nav").addClass('is-sticky');
		}
		else{
            $(".main-nav").removeClass('is-sticky');
		}
    });


});
