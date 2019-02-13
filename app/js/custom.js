$(function() {

    $('.header__button, .map__overlay').on('click', function() {
        $('.header__button').toggleClass('header__button_active');
        if($('.header__button').hasClass('header__button_active')) {
            $('.header__button').text('Свернуть карту');
            $('.map').css('height', '500px');
            $('.map__overlay').css('height', '500px');
        } else {
            $('.header__button').text('На карте');
            $('.map').css('height', '100px');
            $('.map__overlay').css('height', '100px');
        }
        
    });

});