let listsItems = document.querySelectorAll('.lists__item');
listsItems.forEach(function (listsItemsA) {
    listsItemsA.addEventListener('click', function () {
        listsItemsA.classList.toggle('active');
    });
});

let h1 = document.querySelector("h1");
let pageListItem = document.querySelector("#page__list-item");
document.title = h1.textContent + " - Официальный сайт производителя Квалитет";
if (pageListItem) {
    pageListItem.textContent = h1.textContent;
}