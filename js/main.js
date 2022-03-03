$(".myTabs").each(function() {
    var $myTabs = $(this);
    $myTabs.find(".tab_content").hide().eq(0).show();
    $myTabs.find(".award_content").hide().eq(0).show();
    $myTabs.find("ul.tabs_list li:first").addClass("active").show();
    $myTabs.find("ul.award_list li:first").addClass("active").show();
    $myTabs.find("ul.tabs_list li").click(function() {
        var $this = $(this);
        $this.addClass("active").siblings().removeClass("active");
        $myTabs.find(".tab_content").hide();
        var activeTab = $this.find("a").attr("href");
        $(activeTab).show();
        $('html, body').animate({
            scrollTop:$("ul.tabs_list").offset().top
        }, 600);
        return false;
    });
    $myTabs.find("ul.award_list li").click(function() {
        var $this = $(this);
        $this.addClass("active").siblings().removeClass("active");
        $myTabs.find(".award_content").hide();
        var activeTab = $this.find("a").attr("href");
        $(activeTab).show();
        $('html, body').animate({
            scrollTop:$("ul.award_list").offset().top
        }, 600);
        return false;
    });
});
//pop//
$(".close").click(function() {
    $('.popup').fadeOut(200);
});
$(".blacklayer").click(function() {
    $('.popup').fadeOut(200);
});
$(".pop_btn").click(function() {
$("div[id=" + $(this).attr("data-pop") + "]").fadeIn(200);
});
$(".checked").click(function() {
    $('#buy').fadeIn(200);
});
//登入登出示意
$(".sign_btn").click(function(){
    $(".account").fadeOut(200);
    $(".point").fadeOut(200);
});
//left_bar出現
$(document).scroll(function(){
    var scrollPosition = $(document).scrollTop();
    if(scrollPosition>=350){
        $(".left_bar").addClass("left_bar_active");
    }
    else{
        $(".left_bar").removeClass("left_bar_active");
    }
});
$(document).ready(function () {
    if($(window).width()<=1400){
        $(".left_bar").addClass("left_bar_active");
    }
});
$(".top_btn").click(function(){
    $('html, body').animate({
        scrollTop:$("body").offset().top
    }, 600);
});
//toggle
$('.toggle-btn').click(function() {
    if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).siblings('.toggle_content_box').slideUp(400);
    } else {   
    $('.toggle_content_box').slideUp(400);
    $('.toggle-btn').removeClass('active');
    $(this).addClass('active');
    $(this).siblings('.toggle_content_box').slideDown(400); 
    }  
});
$(function(){
    $(function() {
        $('.part0_BTN_box a').click(function() {
            var href = $(this).attr("href");
            $('html, body').animate({
                scrollTop:$("body").offset().bottom
            }, 600);
            return false;
        });
    });
});
$(".plus_btn").click(function(){
    // $document.getElementById("buy-1").index();
    var A= $(this).parent().parent().find(".table_icon_box").html();
    var B= $(this).parent().parent().find(".table_money").html();
    var C=$(".original_price span").html();
    var S=C.substring(0, C.length - 1)*1;
    $(".cart_list").append('<div class="list_line"><div class="table_icon_box toggle_icon_box">'+A+'</div><div class="list_R"><div class="list_price">'+B+'</div><div class="list_delete"></div></div></div>');
    S=S+B.substr(1)*1;
    $(".original_price span").html(S+"元");
});
$(".cart_list").on("click",".list_delete",function(){
    $(this).parent().parent().remove();
    var C=$(".original_price span").html();
    var S=C.substring(0, C.length - 1)*1;
    var D=$(this).parent().find(".list_price").html();
    S=S-D.substr(1)*1;
    $(".original_price span").html(S+"元");
});