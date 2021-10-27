$(function() {
    $(".classification ul li").on("click", "a", function() {
        /* console.log("111"); */
        $(this).addClass("bottom").parent("li").siblings("li").children("a").removeClass("bottom");
        $(".tab").children("div").eq($(this).parent("li").index()).addClass("block").removeClass("none").siblings("div").addClass("none").removeClass("block");
    })
})