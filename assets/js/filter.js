const select = document.querySelector('.filter');
const productList = document.querySelector('.product__list');

select.addEventListener('change', (e) => {
    if (e.target.value === 'price') {
        const items = [...productList.children];
        items.sort((a, b) => {
            const priceA = parseInt(a.querySelector('.price').textContent, 10);
            const priceB = parseInt(b.querySelector('.price').textContent, 10);
            return priceB - priceA;
        });
        productList.innerHTML = '';
        items.forEach(item => productList.appendChild(item));
    }
});