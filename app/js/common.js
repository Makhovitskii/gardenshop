$(function() {

    //Работа с плагином ANIMATE ON SCROLL
    AOS.init({
		once : true,
        duration : 1000,
        offset : 250
	});
    //Конец работы с плагином ANIMATE ON SCROLL


    //плавный скролл
    jQuery.scrollSpeed(100, 800, 'easeOutCubic');
    //конец плавный скролл


    // var $mainNav = $(".main-nav");


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

    $(".main-nav__link").on("click", function (event) {
		$(this).parent().addClass('is-active');
        $(this).parent().siblings().removeClass('is-active');
        var target = $($(this).attr("href")).offset().top;
        $( "html,body" ).animate({
            scrollTop : target - (($(".main-nav").height() / 2))
        }, 1000 );
        console.log(target);
        return false;
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

    stickyHeader();
	function stickyHeader() {
        var $mainNavClone = $(".main-nav"),
            $mainNavCloneHeight = $mainNavClone.height();
        $(window).on('scroll', function () {
            var scroll = $(this).scrollTop();
            if (scroll > $(this).height() + $mainNavCloneHeight + 50) {
                $mainNavClone.addClass('main-nav--stick');
            }
            else{
                $mainNavClone.removeClass('main-nav--stick');
            }
        });

    }

    // createStickyNav ();
    // function createStickyNav () {
    //     var options = {
    //         offset: $(window).height() + $(".main-nav").height() + 30,
    //         offsetSide: 'top',
    //         classes: {
    //             clone:   'main-nav--clone',
    //             stick:   'main-nav--stick',
    //             unstick: 'main-nav--unstick'
    //         }
    //     };
    //     var mainNav = new Headhesive('.main-nav', options);
    // }










});
