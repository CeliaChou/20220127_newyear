$(".door_btn").hover(function () {
    $(".door-1").addClass("door-1-1");
    $(".door-2").addClass("door-2-1");
    $(".p0_blur").addClass("blur-2");
    }, function() {
    $(".door-1").removeClass("door-1-1");
    $(".door-2").removeClass("door-2-1");
    $(".p0_blur").removeClass("blur-2");
    });

$(".door_btn").click(function () {
    $(".door_btn").fadeOut(200);
    $(".door-1").addClass("door-1-2");
    $(".door-2").addClass("door-2-2");
    $(".door-3").addClass("door-3-1");
    $(".door-4").addClass("door-4-1");
    $(".p0_blur").removeClass("p0_blur");
    setTimeout(function(){
        $(".blur-2").removeClass("blur-2");
        $(".door_box").fadeOut(300);
    },200);
    setTimeout(function(){
        $(".door_animation").removeClass("door_animation");
    },400);
    setTimeout(function(){
        $(".tiger").addClass("tiger_animation");
    },600);
});
$(".draw_btn").click(function () {
    $(".red_envelope_style-1").addClass("red_envelope_style-1_active");
    $(".red_envelope_style-2").addClass("red_envelope_style-2_active");
    $(".red_envelope_style-3").addClass("red_envelope_style-3_active");
    $(".red_envelope_style-4").addClass("red_envelope_style-4_active");
    $(".red_envelope_paper").addClass("red_paper_active");
});
//延遲抽獎獎品跳窗
$(".draw_btn").click(function(){
    var Z=setTimeout(function(){get_pop();},1200);
    function get_pop()
    {
        $('#draw_pop').fadeIn(200);
    }
    });
$(".draw_close").click(function(){
    $(".red_envelope_style-1").removeClass("red_envelope_style-1_active");
    $(".red_envelope_style-4").removeClass("red_envelope_style-4_active");
    $(".red_envelope_style-2").removeClass("red_envelope_style-2_active");
    $(".red_envelope_style-3").removeClass("red_envelope_style-3_active");
    $(".red_envelope_paper").removeClass("red_paper_active");
});