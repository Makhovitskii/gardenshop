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


    createStickyNav ();
    function createStickyNav () {
        var options = {
            offset: $(window).height() + $(".main-nav").height() + 30,
            offsetSide: 'top',
            classes: {
                clone:   'main-nav--clone',
                stick:   'main-nav--stick',
                unstick: 'main-nav--unstick'
            }
        };
        // Initialise with options
        var mainNav = new Headhesive('.main-nav', options);
        // Headhesive destroy
        // banner.destroy();
    }



});
