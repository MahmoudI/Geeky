$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname === this.pathname && location.hostname === this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });

    $('.clients').bxSlider({
        minSlides: 3,
        maxSlides: 3,
        slideMargin: 40,
        pager:false,
        slideWidth: 300,
        infiniteLoop: true
    });

});


