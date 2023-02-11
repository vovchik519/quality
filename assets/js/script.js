let listsItems = document.querySelectorAll('.lists__item');
listsItems.forEach(function (listsItemsA) {
    listsItemsA.addEventListener('click', function () {
        listsItemsA.classList.toggle('active');
    });
});

let productText = document.querySelectorAll(".product__text");
let limitText = 40;
productText.forEach(function (product) {
    if (product.textContent.length > limitText) {
        product.textContent = product.textContent.substring(0, limitText) + "...";
    }
});

let h1 = document.querySelector("#title");
let pageListItem = document.querySelector("#page__list-item");
document.title = h1.textContent + " - Официальный сайт производителя Квалитет";
if (pageListItem) {
    pageListItem.textContent = h1.textContent;
}



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