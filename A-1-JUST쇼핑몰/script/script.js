$(function() {
    $('#gnb').on('mouseenter',function() {
        $(this).find('.sub').stop().slideDown(300);
    });
    $('#gnb').on('mouseleave',function() {
        $(this).find('.sub').stop().slideUp(300);
    });

    // 슬라이드 (up / down, left / right)
    const slides = $('.slide_container>ul');
    function slideMove() {
        slides.animate({'top': '-300px'}, 450, function() {
            slides.find('li').eq(0).appendTo(slides);
            slides.css('top', 0);
        })
    }
    setInterval(slideMove, 3000);

    // 탭 버튼
    const tabBtn = $('.notice h2>a');
    tabBtn.on ('click', function() {
        tabBtn.removeClass('on');
        $(this).addClass('on');
        $('.notice').find('.content').hide();
        $(this).parent().next().show();
    });

    // 팝업
    // $('.notice>article').eq(0).find('li').eq(0).on('click')
    $('.modal').on('click', function() {
        $('.popup').show().css('display','flex');
    });
    $('.popup').find('button').on('click', function() {
        $('.popup').hide();
    })
});