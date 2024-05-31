$(function() {

    $(window).on("scroll", function() {
        if( ($(this).scrollTop() > 500) & ($(this).scrollTop() < 4900) ) {
            $(".fixed-btn").fadeIn(100);
            } else {
            $(".fixed-btn").fadeOut(100);

        }
        console.log($(this).scrollTop());
    });

});

//ハンバーガーメニュー
$(".openbtn").click(function(){
	$(this).toggleClass('active');
});

