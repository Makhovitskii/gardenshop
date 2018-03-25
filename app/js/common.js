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

	$(" .main-nav__item").on("click", function () {
		$(this).addClass('is-active').siblings().removeClass('is-active');
		var target = $($(this).attr("href")).offset().top;
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


    //HTML2CANVAS

    $(function () {
        html2canvas($("body"), {
            onrendered: function (canvas) {
                $(".blurheader").append(canvas);
                $("canvas").attr("id", "canvas");
                stackBlurCanvasRGB(
                    'canvas',
                    0,
                    0,
                    $("canvas").width(),
                    $("canvas").height(),
                    20);
            }
        });
        vv = setTimeout(function () {
            $("header").show();
            clearTimeout(vv);
        }, 200);
    });

    $(window).scroll(function () {
        $("canvas").css(
            "-webkit-transform",
            "translatey(-" + $(window).scrollTop() + "px)");
    });

    window.onresize = function () {
        $("canvas").width($(window).width());
    };

    $(document).bind('touchmove', function () {
        $("canvas").css(
            "-webkit-transform",
            "translatey(-" + $(window).scrollTop() + "px)");
    });

    $(document).bind('touchend', function () {
        $("canvas").css(
            "-webkit-transform",
            "translatey(-" + $(window).scrollTop() + "px)");
    });

    //HTML2CANVAS







});
