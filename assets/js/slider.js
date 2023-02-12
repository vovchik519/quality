var swiper2 = new Swiper(".my-swiper2", {
    spaceBetween: 5,
    slidesPerView: 5,
    watchSlidesProgress: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
});

var swiper = new Swiper(".my-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper2,
    },
});