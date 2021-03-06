
var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay:3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        renderProgressbar: function (progressbarFillClass) {
            return '<span class="' + progressbarFillClass + '"></span>';
        }
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
