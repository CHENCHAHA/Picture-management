$(function() {

        $(".tuijian ul").on("click", "li", function() {
            console.log("111");
            /* $(this).addClass("dianji").siblings("li").removeClass("dianji");; */
            /* console.log(index); */
            /* $(".lan1 div").eq($(this).index()).css("display", "block").siblings("div").css("display", "none"); */
            /* console.log($(".lan1").children().eq($(this).index())); */
            //这个例子体现了tab栏切换的重要原理，需要获取div的所有儿子节点再去获取儿子节点中的某个节点。
            $(".lan1").children().eq($(this).index()).css("display", "block").siblings("div").css("display", "none");
            /* var zhi = $(this).offset().left + 15;
            $(".tuijian1 i").css("left", 500) */
            var ju = $(this).offset().left;
            var kuan = $(this).innerWidth();
            $(".tuijian i").stop().animate({
                width: kuan,
                left: ju
            }, 300);
        })

    })
    /* $(".tuijian ul").on("click", "li", function() { */
    /* alert("55"); */
    /* var ju = $(this).offset().left;
        var kuan = $(this).innerWidth();
        $(".tuijian i").stop().animate({
            width: kuan,
            left: ju
        }, 300);
    })

}) */