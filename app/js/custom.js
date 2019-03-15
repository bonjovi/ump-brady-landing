$(function() {

    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop: true,
        mouseDrag: false
    });

    $(".fancybox").fancybox();

    $('.tooltipster').tooltipster();

    if($(window).width() < 767) {
        $('.pictures__text:first-child').insertBefore('.pictures__section:first-child').css('margin','0 0 10px 0').css('padding','20px');
        $('.pictures__text:last-child').insertBefore('.pictures__section:last-child').css('margin','0 0 10px 0').css('padding','20px');

        $('.feedback img').css('margin-top','0');
    }

});