/**
 * Created by lenovo on 18/3/23 023.
 */
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
    (function(){
        window.scrollReveal = new scrollReveal({reset: true});
    })();
};
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
new WOW().init();