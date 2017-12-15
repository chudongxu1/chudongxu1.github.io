
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
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
var mp3=document.querySelector("#mp3");
var mp3Btn=document.querySelector("#mp3Btn");
mp3Btn.onclick=function(){
    if(mp3.paused){
        mp3Btn.style.animationPlayState="running";
        mp3.play()
    }else{
        mp3Btn.style.animationPlayState="paused";
        mp3.pause()
    }
}

