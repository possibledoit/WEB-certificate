$(function() {
    $('.gnb>ul>li').on('mouseenter', function() {
        $('.sub').stop().slideUp(300);
        $(this).find('.sub').stop().slideDown(300);
    });
    $('.gnb>ul').on('mouseleave', function() {
        $('.sub').stop().slideUp(300);
    });
    
    // 슬라이드 (fadeIn / fadeOut)
    function slideMove() {
        let imgs = $('.slide_container>ul').find('li');
        imgs.eq(0).stop().fadeOut(450, function() {
            imgs.eq(0).appendTo($('.slide_container>ul'));
        })
        imgs.eq(1).stop().fadeIn(450);
    }
    setInterval(slideMove, 3000);

    // 
});