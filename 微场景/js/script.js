var mySwiper = new Swiper ('.swiper-container', {
    //文档
    direction: 'vertical',
    //方向
    loop: true,


    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }

})
