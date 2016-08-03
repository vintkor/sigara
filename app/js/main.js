// Видео фон
$(document).ready(function() {
    $('#my-video').backgroundVideo({
        pauseVideoOnViewLoss: false
    });
    /*-------------------------Анимация изображений------------------------*/
    $('.header-wrapper').hover().mousemove(function(e){

        //right image
        var top = "translateY(" + e.pageY / 20 + "px)";
        var left = "translateX(" + e.pageX / 20 + "px)";
        $('.header-sigara').css({
            "transform" : top + left
        });

        //left image
        var top2 = "translateY(" + e.pageY / 100 + "px)";
        var left2 = "translateX(" + e.pageX / 100 + "px)";
        $('.header-sigara-gauss').css({
            "transform" : top2 + left2
        });

        //h1
        var top3 = "translateY(" + e.pageY / 50 + "px)";
        var left3 = "translateX(" + e.pageX / 50 + "px)";
        $('.center-content').css({
            "transform" : top3 + left3
        });
    });

    /*-------------------------Animate Modal------------------------*/
    $("#demo01").animatedModal({
        modalTarget: 'animatedModal',
        animatedIn:'bounceInLeft',
        animatedOut:'bounceOutLeft',
        animationDuration:'.5s'
    });
    $("#demo02").animatedModal({
        modalTarget: 'animatedModal2',
        animatedIn:'bounceInDown',
        animatedOut:'bounceOutUp',
        animationDuration:'.5s'
    });
    $("#demo03").animatedModal({
        modalTarget: 'animatedModal3',
        animatedIn:'bounceInRight',
        animatedOut:'bounceOutRight',
        animationDuration:'.5s'
    });
    $("#demo04").animatedModal({
        modalTarget: 'animatedModal4',
        animatedIn:'bounceInUp',
        animatedOut:'bounceOutDown',
        animationDuration:'.5s'
    });
});