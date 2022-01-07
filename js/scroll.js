// 滚动监听 */
// 定义一个获取所有div的距离高度
var arrOffsetTop = [
 $('.div1').offset().top,
 $('.div2').offset().top,
 $('.div3').offset().top,
 $('.div4').offset().top,
];

// 获取每个div的平均高度
var fTotalHgt = 0;
for(var i=0; i<$('div').length; i++) {
 fTotalHgt += $('div').eq(i).outerHeight();
}
var fAverageHgt = parseFloat(fTotalHgt / $('div').length);

// 滚动事件(每次滚动都做一次循环判断)
$(window).scroll(function() {
    for(var i=0; i<$('div').length; i++) {
        if($(this).scrollTop() > arrOffsetTop[i] - fAverageHgt) {  // 减去一个固定值，是定位准确点
           $('ul li').eq(i).addClass('active').siblings().removeClass('active');
        }
    }
    var bignav =$(".subnav_wrapper");      //获取到子导航栏
    if($(this).scrollTop()>0){
        bignav.css({
        width: "100%",
        position:"fixed",
        top:0,
        zIndex:9999
        });
    }else{
        bignav.css("position","static");
    }
});
/* 点击事件 */
$('ul li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('body, html').animate({scrollTop: arrOffsetTop[$(this).index()]-100}, 500);

});

