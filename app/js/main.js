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
        var top2 = "translateY(" + e.pageY / 120 + "px)";
        var left2 = "translateX(" + e.pageX / 120 + "px)";
        $('.header-sigara-gauss').css({
            "transform" : top2 + left2
        });

        //h1
        var top3 = "translateY(" + e.pageY / 60 + "px)";
        var left3 = "translateX(" + e.pageX / 60 + "px)";
        $('.header-wrapper h1').css({
            "transform" : top3 + left3
        });
    });
});