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
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
		fade: true,
        pauseOnHover:false,
        pauseOnFocus: false,
    });

	$(".main-nav__item").on("click", function () {
		$(this).addClass('is-active').siblings().removeClass('is-active');
		var target = $($(this).attr("data-scrollTo")).offset().top;
        $( "html,body" ).animate({
            scrollTop : target - $mainNav.height()
        }, 1000 );
    });

	$(".js-testimonials-slider").slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover:false,
        pauseOnFocus: false,
	});


    createSticky($(".main-nav"));


    function createSticky(sticky) {

        if (typeof sticky !== "undefined") {

            var	pos = sticky.offset().top,
                win = $(window);

            win.on("scroll", function() {
                win.scrollTop() >= pos ? sticky.addClass("is-sticky") : sticky.removeClass("is-sticky");
            });
        }
    };



});
