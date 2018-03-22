$(function() {

	$(".herobanner-slider").slick({
        arrows: false
	});

	$(".main-nav__item").on("click", function () {
		$(this).addClass('is-active').siblings().removeClass('is-active');
    });



});
