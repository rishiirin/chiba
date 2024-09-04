$(function() {

    $(window).on("scroll", function() {
        if( ($(this).scrollTop() > 10) & ($(this).scrollTop() < 9900) ) {
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

