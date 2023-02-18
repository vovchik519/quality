let listsItems = document.querySelectorAll('.lists__item');
listsItems.forEach(function (listsItemsA) {
    listsItemsA.addEventListener('click', function () {
        listsItemsA.classList.toggle('active');
    });
});

let h1 = document.querySelector("h1");
let pageListItem = document.querySelector("#page__list-item");
if (h1) {
    document.title = h1.textContent + " - Официальный сайт производителя Квалитет";
    if (pageListItem) {
        pageListItem.textContent = h1.textContent;
    }
} else {
    console.error("Элемент h1 не найден.");
}

let bodyOverflow = document.querySelector('body');
let menuBtn = document.querySelector('.menu-btn');
let headerWrap = document.querySelector('.header__menu-wrapper');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    headerWrap.classList.toggle('active');
    bodyOverflow.classList.toggle('lock');
})
document.addEventListener('click', function (event) {
    if (!headerWrap.contains(event.target) && !menuBtn.contains(event.target)) {
        menuBtn.classList.remove('active');
        headerWrap.classList.remove('active');
        bodyOverflow.classList.remove('lock');
    }
});

var header = document.getElementsByTagName("header")[0];
var headerHeight = header.offsetHeight;
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || currentScrollPos <= headerHeight) {
        header.classList.remove("hide");
    } else {
        header.classList.add("hide");
    }
    prevScrollpos = currentScrollPos;
}

var headerHeight = document.getElementsByTagName("header")[0].offsetHeight;
document.getElementsByTagName("main")[0].style.marginTop = headerHeight + "px";