$(function() {

    //Работа с плагином ANIMATE ON SCROLL
    AOS.init({
		once : true,
        duration : 1000,
        offset : 250
    });
    //Конец работы с плагином ANIMATE ON SCROLL


    $(".herobanner-slider").slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
		fade: true,
        pauseOnHover:false,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 640,
                settings: "unslick",
            }
        ]
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
        var $mainNavClone = $(".main-nav--clone"),
            $mainNavCloneHeight = $mainNavClone.height();
        $(window).on('scroll', function () {
            var scroll = $(this).scrollTop();
            if (scroll > $(this).height() + $mainNavCloneHeight + 50) {
                $(".main-nav").removeClass('is-shown').end().find('.burger').removeClass('burger--close');
                $mainNavClone.addClass('main-nav--stick');
            }
            else{
                $mainNavClone.removeClass('main-nav--stick is-shown');
                $mainNavClone.find('.burger').removeClass('burger--close');
            }
        });

    };



    $(".burger").on("click", function (event) {
        $(this).toggleClass('burger--close');
        $(this).closest(".main-nav").toggleClass('is-shown');
        $(this).closest('.main-nav').siblings().removeClass('is-shown');
        $(this).closest(".main-nav").siblings().find('.burger').removeClass('burger--close');
        // $(".dimmer").toggleClass('is-shown');
    });


    // //SMOOTH PAGE SCROLL
    // $("body").mCustomScrollbar({
    //     theme:"minimal",
    // });



});
