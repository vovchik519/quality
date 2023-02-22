var currentUrl = window.location.href;
if (currentUrl.indexOf('?param=action') !== -1) {
    document.getElementById('action').style.display = 'block';
    document.getElementById('news').style.display = 'none';
    document.getElementById('tab-action').classList.add('active');
    document.getElementById('tab-news').classList.remove('active');
}
if (currentUrl.indexOf('?param=shop') !== -1) {
    document.getElementById('shop').style.display = 'block';
    document.getElementById('map').style.display = 'none';
    document.getElementById('tab-shop').classList.add('active');
    document.getElementById('tab-map').classList.remove('active');
}
if (currentUrl.indexOf('?param=measuring') !== -1) {
    document.getElementById('lists__measuring').classList.add('active');
    document.getElementById('lists__manual').classList.remove('active');
}
if (currentUrl.indexOf('?param=tooling') !== -1) {
    document.getElementById('lists__tooling').classList.add('active');
    document.getElementById('lists__manual').classList.remove('active');
}