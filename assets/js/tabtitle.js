const tabBtns = document.querySelectorAll('.tab-links');
const title = document.getElementById('title');

// добавить обработчик событий на каждую кнопку
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // удалить класс "active" со всех кнопок
        tabBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        // добавить класс "active" на текущую кнопку
        btn.classList.add('active');
        // установить текст заголовка на текст кнопки
        title.textContent = btn.textContent;
    });
});

// установить заголовок при загрузке страницы
window.addEventListener('load', () => {
    const activeBtn = document.querySelector('.tab-links.active');
    if (activeBtn) {
        title.textContent = activeBtn.textContent;
    }
});