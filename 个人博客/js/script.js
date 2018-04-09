/**
 * Created by lenovo on 18/3/23 023.
 */
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
    (function(){
        window.scrollReveal = new scrollReveal({reset: true});
    })();
};
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    loop: true,
    grabCursor: true,
    autoplay: {
        delay:3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
new WOW().init();
