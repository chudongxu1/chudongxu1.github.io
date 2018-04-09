var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay:3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',

    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }

});
var p1=document.querySelectorAll(".p1")[0];
var p2=document.querySelectorAll(".p2")[0];
var p3=document.querySelectorAll(".p3")[0];
var pic=document.querySelector(".pic");
var pic1=document.querySelector(".pic1");
var pic2=document.querySelector(".pic2");
function toggle1(){
    pic.style.display="block";
    pic1.style.display="none";
    pic2.style.display="none";
    p1.style.borderBottom="2px solid red";
    p2.style.borderBottom="none";
    p3.style.borderBottom="none";
}
function toggle2(){
    pic.style.display="none";
    pic1.style.display="block";
    pic2.style.display="none";
    p1.style.borderBottom="none";
    p2.style.borderBottom="2px solid red";
    p3.style.borderBottom="none";
}
function toggle3(){
    pic.style.display="none";
    pic1.style.display="none";
    pic2.style.display="block";
    p1.style.borderBottom="none";
    p2.style.borderBottom="none";
    p3.style.borderBottom="2px solid red"
}
