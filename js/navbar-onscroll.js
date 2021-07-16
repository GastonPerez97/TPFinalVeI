$(document).on('scroll', function(){
    if ( $(window).scrollTop() > 180) {
        $('#nav-header').addClass('background-black');
    } else {
        $('#nav-header').removeClass('background-black');
    }
});