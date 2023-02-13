let productText = document.querySelectorAll(".product__text");
let newsText = document.querySelectorAll(".news__item-text");

function truncateText(elements, limit) {
    if (elements.length > 0) {
        elements.forEach(function (event) {
            if (event.textContent.length > limit) {
                event.textContent = event.textContent.slice(0, limit).trim() + "...";
            }
        });
    }
}

truncateText(document.querySelectorAll(".product__text"), 40);
truncateText(document.querySelectorAll(".news__item-text"), 60);