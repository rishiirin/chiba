$(function() {

    $(window).on("scroll", function() {
        if( ($(this).scrollTop() > 500) & ($(this).scrollTop() < 3720) ) {
            $(".fixed-btn").fadeIn(100);
            } else {
            $(".fixed-btn").fadeOut(100);

        }
        console.log($(this).scrollTop());
    });

});