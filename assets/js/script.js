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

var canvases = document.querySelectorAll(".border-dashed");

canvases.forEach(function (canvas) {
  var ctx = canvas.getContext("2d");

  function draw() {
    var dashLen = 34;
    var dashGap = 34;
    var dashColor = "#EE7F01";
    var bgColor = "#000000";
    var x = 0;
    var y = 0;
    var width = 680;
    var height = 480;

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = dashColor;
    ctx.lineWidth = 30;
    ctx.setLineDash([dashLen, dashGap]);
    ctx.strokeRect(x, y, width, height);
  }

  draw();
});