var myMap;
var options = {};

function showLocationOnMap(locationName) {
    ymaps.geocode(locationName).then(function (res) {
        var firstGeoObject = res.geoObjects.get(0);
        myMap.setCenter(firstGeoObject.geometry.getCoordinates());

        // создаем маркер
        var myPlacemark = new ymaps.Placemark(firstGeoObject.geometry.getCoordinates(), {}, options);
        myMap.geoObjects.add(myPlacemark);
    });
}

ymaps.ready(init);

function init() {
    myMap = new ymaps.Map("map", {
        center: [55.7558, 37.6173],
        zoom: 10
    });

    var Placemark = new ymaps.Placemark([55.685468917495, 37.61175976349], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Моторин</div><div class="address">Москва, Нагорный проезд, д.12Г, стр.7</div><div class="phone">+7 (495) 229-44-50</div></div>'
    }, {});

    myMap.geoObjects.add(Placemark);

    Placemark = new ymaps.Placemark([56.399188568334, 38.716720022476], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Александров , ул. Первомайская д. 3</div><div class="phone">8(49244)93573</div></div>'
    }, {});

    myMap.geoObjects.add(Placemark);

    Placemark = new ymaps.Placemark([56.399188568334, 38.716720022476], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Александров , ул. Первомайская д. 3</div><div class="phone">8(49244)93573</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.912391176336, 52.326890093254], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Альметьевск , ул.  ул.Советская, д. 178</div><div class="phone">(8553) 30-28-73, 30-28-72</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.88988559273, 52.291181375142], {
        balloonContent: '<div class="baloon-content"><div class="name">АМАЛИЯ ИНСТРУМЕНТ</div><div class="address">г. Альметьевск , Базовая ул, дом № 7А/1</div><div class="phone">8 (8552) 53-25-26</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.907095224813, 52.263267867208], {
        balloonContent: '<div class="baloon-content"><div class="name">Яруллин Марсель Наилович ИП</div><div class="address">г. Альметьевск ,  Гафиатуллина ул, дом № 51</div><div class="phone">8 (8553) 335541</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([44.906248091522, 37.332885086782], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Анапа, Симферопольское ш, 1</div><div class="phone">+7(918)064-02-32</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([44.882185742634, 37.319484799085], {
        balloonContent: '<div class="baloon-content"><div class="name">&quot;Прораб&quot;</div><div class="address">г. Анапа, Ленина ул, дом № 96</div><div class="phone">+7(918)064-02-32</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([44.887701355209, 37.338671248159], {
        balloonContent: '<div class="baloon-content"><div class="name">&quot;Прораб&quot;</div><div class="address">г. Анапа, Объездная ул, дом № 5</div><div class="phone">8 (918) 67-00-844</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.400616210888, 43.808579381615], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Арзамас,  ул. Калинина 2 В </div><div class="phone">(83147)7-65-60</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.401654695919, 43.808841197896], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">Арзамас г, Пландина ул, дом № 12, корпус 1</div><div class="phone">(831) (247)2-06-07</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.027756643278, 47.825779403522], {
        balloonContent: '<div class="baloon-content"><div class="name">СтройГид</div><div class="address">Саратовская обл., г. Балаково, ул. Набережная Леонова, д. 53/1</div><div class="phone">8 (8453) 220-515</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([50.61035131326, 36.544212517197], {
        balloonContent: '<div class="baloon-content"><div class="name">БелОптИнструмент</div><div class="address">г.Белгород, ул.Сумская, 68 б</div><div class="phone">8 (952) 424-60-81, (952) 434-99-88</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([50.588707553346, 36.619299771164], {
        balloonContent: '<div class="baloon-content"><div class="name">Белпаркторг</div><div class="address">г. Белгород, ул. Корочанская, д. 39 В</div><div class="phone">8 (4722) 30-07-33</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([50.589618765831, 36.622884004226], {
        balloonContent: '<div class="baloon-content"><div class="name">Агросоюз</div><div class="address">г. Белгород,Корочанская ул, дом № 71</div><div class="phone">7 (910) 3201341</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([50.57757284516, 36.534381291102], {
        balloonContent: '<div class="baloon-content"><div class="name">Боровская И.Б.</div><div class="address">Белгород г, 8 Марта ул, дом № 174</div><div class="phone">+7 (951) 1433018</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([50.619529175502, 36.565358027257], {
        balloonContent: '<div class="baloon-content"><div class="name">ГиперСтрой ООО</div><div class="address">Белгород г, Студенческая ул, дом № 38</div><div class="phone">+7 (951) 1433018</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([50.5689182929, 36.569490832815], {
        balloonContent: '<div class="baloon-content"><div class="name">Криволуцкий О.В.</div><div class="address">Белгород г, Щорса ул, дом № 36</div><div class="phone">+7 (910) 7456603</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([50.611224669935, 36.578214138372], {
        balloonContent: '<div class="baloon-content"><div class="name">Стин + ООО</div><div class="address">Белгород г, Б.Хмельницкого пр-кт, дом № 127</div><div class="phone">7(4722) 318041</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.110014064497, 54.134243279762], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Белебей,  ул. Советская, 30/4</div><div class="phone">8 (34786) 444-77</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.115035910557, 43.539234583128], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">Богородск, пр-т Ленина 374</div><div class="phone">(83170) 2-41-09</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.348672912802, 44.081177732471], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Бор, ул. Стеклозаводское шоссе, д. 3</div><div class="phone">(83159) 2-41-38</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.264029798496, 34.361458383077], {
        balloonContent: '<div class="baloon-content"><div class="name">Будаков А.И.ИП</div><div class="address">Брянская обл,г.Брянск Дуки ул.,дом 60</div><div class="phone">89621355767</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.533298086816, 52.822828372317], {
        balloonContent: '<div class="baloon-content"><div class="name">Пронин Александр Иванович ИП </div><div class="address">Татарстан Респ, Бугульминский р-н, Бугульма г, Петровская ул, дом № 61б</div><div class="phone">89274011111</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.626796610808, 52.422061044454], {
        balloonContent: '<div class="baloon-content"><div class="name">Шайхуллин Раиль Наильевич ИП</div><div class="address">г. Бугуруслан, Белинского ул, дом № 8 А</div><div class="phone">+7 (922) 880-03-79</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.659777462808, 52.440416880951], {
        balloonContent: '<div class="baloon-content"><div class="name">Твой Электробензоинструмент</div><div class="address">Оренбургская область, г Бугуруслан, ул. Революционная, д. 69</div><div class="phone">8-987-843-76-15</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.780136157099, 52.24689091747], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Бахарев КС</div><div class="address">г. Бузулук, Зеленая ул, дом № 14</div><div class="phone">89325549444</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.957213494493, 56.266509906746], {
        balloonContent: '<div class="baloon-content"><div class="name">Баумолл</div><div class="address">г. Пермь, ул. Героев Хасана, 109</div><div class="phone">(342) 2-497-333</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.030039901026, 56.301875777769], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Пермь, ул. Уральская, 63, корп. 5</div><div class="phone">+7 (342) 200-92-34</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.009173350445, 56.184273776704], {
        balloonContent: '<div class="baloon-content"><div class="name">Инетсрумент-оружие</div><div class="address">Пермь	Дзержинского 17</div><div class="phone">8 (342) 230-32-33</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.005543566588, 56.267230030671], {
        balloonContent: '<div class="baloon-content"><div class="name">Инетсрумент-оружие</div><div class="address">Пермь	Революции 16</div><div class="phone">8 (342) 216-01-70</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.003968848732, 55.939316705262], {
        balloonContent: '<div class="baloon-content"><div class="name">Инетсрумент-оружие</div><div class="address">Пермь	Ласьвинская 32</div><div class="phone">8 (342) 207-53-47</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.003324635508, 55.937257194673], {
        balloonContent: '<div class="baloon-content"><div class="name">Мир инструментов</div><div class="address">Пермь	Ласьвинская 37.</div><div class="phone">+7 (342) 250‒40‒58</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([59.825427690802, 30.353729776704], {
        balloonContent: '<div class="baloon-content"><div class="name">Прокат инструмента</div><div class="address">Санкт-Петербург	Московское шоссе, дом № 13, корпус 7, Литер Б</div><div class="phone"></div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([59.853713, 30.438524], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Моткалюк Константин Газиевич</div><div class="address">г. Санкт-Петербург, пр. Александровской Фермы, 29АН</div><div class="phone">+7 (953) 3710139</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.71859735913, 55.983538439812], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Уфа,  ул.Бакалинская, 29</div><div class="phone">(347) 246-06-73</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.712846580429, 55.992244612702], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Кадрметов Р.Т.</div><div class="address">Уфа	ул. Менделеева, 137 к5</div><div class="phone">+7‒927‒236‒25‒02</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.745918729058, 55.971585554475], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Кадрметов Р.Т.</div><div class="address">Уфа	ул. Кировоградская, 33</div><div class="phone">+7‒927‒236‒25‒02</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.802418010899, 56.096683371949], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Кадрметов Р.Т.</div><div class="address">Уфа	ул. Индустриальное шоссе, 44/1 к2</div><div class="phone">+7‒927‒236‒25‒02</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.381721807115, 48.573417993623], {
        balloonContent: '<div class="baloon-content"><div class="name">ИнТех</div><div class="address"> Ульяновск г, Ульяновский пр-кт, дом № 28</div><div class="phone">8-917-625-62-00</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.323009639268, 48.390547946015], {
        balloonContent: '<div class="baloon-content"><div class="name">Пума ООО</div><div class="address"> Ульяновск г, Марата ул., дом № 8, корпус 2</div><div class="phone">8-904-189-30-47 </div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.303502208948, 48.305196199983], {
        balloonContent: '<div class="baloon-content"><div class="name">СИГМА-СИ ООО</div><div class="address"> Ульяновск г, Московское ш, дом № 17</div><div class="phone"> 8-906-390-95-38</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.299100717313, 48.284995496278], {
        balloonContent: '<div class="baloon-content"><div class="name">ТД ВОЛГА АС ООО</div><div class="address"> Ульяновск г, Московское ш, дом № 32</div><div class="phone">8-84-22-34-85-67</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.146677972994, 47.23152235582], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Чебоксары, пр. Московский, 10</div><div class="phone">(8352) 58-46-48, 58-68-12</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.102961084476, 47.268874805557], {
        balloonContent: '<div class="baloon-content"><div class="name">Спрут-сервис</div><div class="address">Чебоксары, ул. Хевешская, дом 1А</div><div class="phone">8 (8352) 65-56-39</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.108270350607, 47.288969236826], {
        balloonContent: '<div class="baloon-content"><div class="name">Спрут-сервис</div><div class="address">Чебоксары, ул. Ленинского Комсомола, 25/1</div><div class="phone">8 (8352) 65-56-38</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.17057416564, 61.471636893098], {
        balloonContent: '<div class="baloon-content"><div class="name">Товар для дома сада</div><div class="address">Челябинск г, Танкистов ул, дом № 177 А офис 205</div><div class="phone">8-904-979-31-06, 8(351)223-55-20</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.980630106123, 43.257932953373], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Ворсма,  ул. Ленина, д. 202</div><div class="phone">8 (83171) 6-46-09</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.312711878601, 38.628949523803], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">Воскресенск, Коммунистическая, д. 139</div><div class="phone">+7 904 783-08-30</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.048751685321, 53.999865324216], {
        balloonContent: '<div class="baloon-content"><div class="name">Магазин Champion Татаринов К.В ИП</div><div class="address">г. Воткинск, ул. 1905 года, 28</div><div class="phone">7 (3412) 20-91-45 (доб. 1)</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.059299640489, 53.996688036519], {
        balloonContent: '<div class="baloon-content"><div class="name">Электромир Гизтдинов Р.Р ИП</div><div class="address">г. Воткинск, ул. Марата, 40</div><div class="phone">7 (34145) 4-47-00</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.032598910472, 53.987391885732], {
        balloonContent: '<div class="baloon-content"><div class="name">Универсал Сусекова А.В ИП</div><div class="address">г. Воткинск, Волгоградская ул., 18&quot;</div><div class="phone">7 (963) 545-14-36</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.321932176467, 42.153800364418], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Выкса, ул. Лермонтова, д. 14</div><div class="phone">8 (83177) 3-97-76</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.240318509006, 42.111424510091], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">Вязники 	Ленина д.48 </div><div class="phone">8 (49233) 2-30-03</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.136185791431, 52.653347862427], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Глазов, ул. Пряженникова, д. 12 </div><div class="phone">(34141) 5-89-48, 3-68-30</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.64537441734, 43.47597132209], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">Нижегородская обл., г. Городец, ул. Кирова, д.44  </div><div class="phone">(83161) 9-46-70</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.242854193964, 43.443342381615], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Дзержинск, пр-т Ленина, 45 </div><div class="phone">(8313) 26-31-14, 26-07-70</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.233978696164, 43.442564155176], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Дзержинск, ул. Циолковского, д. 24 </div><div class="phone">(83132) 5-78-00</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.23952027122, 43.486941446015], {
        balloonContent: '<div class="baloon-content"><div class="name">СВАРКА ПЛЮС</div><div class="address">Дзержинск г, Ленина пр-кт, дом № 86</div><div class="phone">+7 (8313) 26-28-85</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.239923481335, 43.48436677393], {
        balloonContent: '<div class="baloon-content"><div class="name">ЭРА ТД</div><div class="address">Дзержинск г, Ленина пр-кт, дом № 95 а</div><div class="phone">+7 (910) 101-08-80, +7 (8313) 23-10-10, доб. 116</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.204040284235, 49.628849413612], {
        balloonContent: '<div class="baloon-content"><div class="name">МолотТок</div><div class="address">г. Димитровград, ул.Трудовая д.15</div><div class="phone">8(84235) 5-80-85</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.225111570393, 49.616661903687], {
        balloonContent: '<div class="baloon-content"><div class="name">ИСКРА ООО</div><div class="address"> Димитровград г, Куйбышева ул, дом № 239, корпус б</div><div class="phone">8-927-815-31-54</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.222908275346, 49.574171192048], {
        balloonContent: '<div class="baloon-content"><div class="name">Турабова Сона Захид Кызы ИП</div><div class="address">Димитровград г, Свирская ул, дом № 50</div><div class="phone"></div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.208018630466, 49.628341066652], {
        balloonContent: '<div class="baloon-content"><div class="name">Фокин Д.С. ИП</div><div class="address"> Димитровград г, Автостроителей пр-кт, дом № 2B</div><div class="phone">8-927-819-71-82</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.873050179321, 60.656576068744], {
        balloonContent: '<div class="baloon-content"><div class="name">ООО «ИНИГС»</div><div class="address">г. Екатеринбург, ул. Шефская, д. 3А лит. К.</div><div class="phone">+7 (343) 389-10-10, 8-800-5555-079</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.734592567876, 60.981338403687], {
        balloonContent: '<div class="baloon-content"><div class="name">Точка Маркет</div><div class="address">Косулино с, Ленина ул, дом № 1</div><div class="phone">+7 (343) 383-00-83</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.640580539596, 43.400156177243], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Заволжье,  Баумана ул, д. 1Б</div><div class="phone">(83161) 7-00-04</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.283753569463, 52.006092139881], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Заинск, ул. Рафикова д. 8</div><div class="phone">8 987 286 27 33</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.851399215675, 48.497206319032], {
        balloonContent: '<div class="baloon-content"><div class="name">Инструмент</div><div class="address">Зеленодольск	Карла Маркса ул, дом № 12</div><div class="phone">(84371) 5-72-61</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.864323706736, 48.547161321687], {
        balloonContent: '<div class="baloon-content"><div class="name">ХозОпт</div><div class="address">Зеленодольск г	Королева ул, дом № 26</div><div class="phone">(952) 048-88-44</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.849752213102, 48.533082522736], {
        balloonContent: '<div class="baloon-content"><div class="name">ЭлСИ</div><div class="address">Зеленодольск г	Ветровая ул, дом № 16</div><div class="phone">(84371) 2-71-00</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.990358059417, 41.034546932541], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Иваново, ул. 10-й проезд, 51</div><div class="phone">8 (4932) 31-10-51</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.811903192988, 53.198374046627], {
        balloonContent: '<div class="baloon-content"><div class="name">Республика Удмуртия, г Ижевск ул.Пойма, д.11</div><div class="address">Республика Удмуртия, г Ижевск ул.Пойма, д.11</div><div class="phone">8 (3412) 77-16-40</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.863276309919, 53.219451148585], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">Ижевск	Кирова ул., д. 146</div><div class="phone">+7(3412)24-70-20</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.837938061038, 53.210010369294], {
        balloonContent: '<div class="baloon-content"><div class="name">Гиззатуллин Ф.Ф ИП  </div><div class="address">Ижевск	Красноармейская ул., 128</div><div class="phone">7 (982) 796-22-62</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.811955265174, 53.191499969788], {
        balloonContent: '<div class="baloon-content"><div class="name">ооо Позитив</div><div class="address">Ижевск	ул Пойма 7 отдел 227 ТТ инструмент</div><div class="phone">7 (3412) 65-88-80</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.810359067917, 53.195807895753], {
        balloonContent: '<div class="baloon-content"><div class="name">Каскад-инструмент ООО</div><div class="address">Ижевск	ул Пойма 17</div><div class="phone">7 (982) 996-67-91</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.855228405943, 53.292444535951], {
        balloonContent: '<div class="baloon-content"><div class="name">Инетсрумент-оружие</div><div class="address">Ижевск	ул.Молодежная 107Б, отдел 104</div><div class="phone">+7 (3412) 908-598</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.873392569758, 53.221656420884], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">Ижевск	г. Ижевск, ул. Удмуртская, д. 261</div><div class="phone">+7 (3412) 79-29-90</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.627341999993, 47.887170457672], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Йошкар-Ола,  пр.Гагарина, 13</div><div class="phone">(8362) 30-49-96</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.624657210067, 47.859924669311], {
        balloonContent: '<div class="baloon-content"><div class="name">Магазин Партнер</div><div class="address">г. Йошкар-Ола, ул. Крылова, д. 25е</div><div class="phone">8 (8362) 34-70-70</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.620863579325, 47.889729819032], {
        balloonContent: '<div class="baloon-content"><div class="name">Город Мастеров</div><div class="address">Йошкар-Ола	Панфилова ул, дом № 10</div><div class="phone">9024317911</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.830102999994, 49.100344279762], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Казань, ул. Короленко, 41</div><div class="phone">(843) 526-64-44</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.755625452331, 49.200751008598], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Казань, Р.Зорге, 33</div><div class="phone">(843) 224-35-71ф, 224-35-81</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.836285531238, 49.127540488343], {
        balloonContent: '<div class="baloon-content"><div class="name">Буровников Н.Н. ИП </div><div class="address">Казань г, Маршала Чуйкова ул, дом № 31Б</div><div class="phone">&quot; +7(843)2023331 &quot;</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.811343981342, 49.270398443391], {
        balloonContent: '<div class="baloon-content"><div class="name">Хозстроймаркет</div><div class="address">Казань, 	Интернациональная ул., 11Б </div><div class="phone"></div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.466348565613, 42.103194846558], {
        balloonContent: '<div class="baloon-content"><div class="name">Гермес</div><div class="address">г. Кинешма, ул.Желябова, д.43</div><div class="phone">(49331) 2-44-42</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.36225604457, 41.306438317791], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Ковров, ул. Лопатина д. 28  </div><div class="phone">(49232)6-49-67</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.302039841899, 39.380751728836], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Кольчугино,  ул.3 Интернационала, 81</div><div class="phone">(49245) 9-15-88</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.054336996041, 92.940208326966], {
        balloonContent: '<div class="baloon-content"><div class="name">Вираж</div><div class="address">Красноярск	Краснодарская 40а ст1</div><div class="phone">+7 800 775-46-45</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.028181413562, 92.833556467424], {
        balloonContent: '<div class="baloon-content"><div class="name">Вираж</div><div class="address">Красноярск	Северо-Енисейская, 4</div><div class="phone"></div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.043365004435, 92.844039657655], {
        balloonContent: '<div class="baloon-content"><div class="name">Вираж</div><div class="address">Красноярск	Маерчака, 102 </div><div class="phone">+7 (391) 219-44-44</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.992619567358, 92.903440398377], {
        balloonContent: '<div class="baloon-content"><div class="name">Вираж</div><div class="address">Красноярск	Королева, 15 </div><div class="phone">+7 (391) 276-84-20</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.977738162355, 92.836358446015], {
        balloonContent: '<div class="baloon-content"><div class="name">Вираж</div><div class="address">Красноярск	Свердловская, 69</div><div class="phone">+7 (391) 219-44-44</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.152825665125, 44.209853343586], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Кстово, пл. Ленина, 3/1</div><div class="phone">(83145) 3-60-85</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.115342299813, 46.594904831499], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Кузнецк, ул. Белинского, 98 А</div><div class="phone">(84157)7-80-44, 7-80-51</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.110961229644, 46.592973237031], {
        balloonContent: '<div class="baloon-content"><div class="name">Бахметьев А.С. ИП</div><div class="address"> Кузнецк г, Пушкина ул, дом № 2А</div><div class="phone">8-927-286-20-95</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.746470138341, 36.18056784018], {
        balloonContent: '<div class="baloon-content"><div class="name">Вариант-А ООО</div><div class="address">Курск г, Гоголя ул, дом № 55</div><div class="phone"></div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.729255702263, 36.18277196454], {
        balloonContent: '<div class="baloon-content"><div class="name">Сапрыкин А.А</div><div class="address">Курская обл, Курск г, Верхняя Луговая ул, дом № 16</div><div class="phone">89045253454</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.617854529961, 39.582667991402], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Липецк, ул.Космонавтов, 2</div><div class="phone">(83149) 5-88-77</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.57174790943, 39.601325197358], {
        balloonContent: '<div class="baloon-content"><div class="name">Партнер ООО</div><div class="address">Липецк г, ул. Лесная д. 2</div><div class="phone">8-4742545237</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.585485780571, 39.545564734376], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">г. Липецк, пр. Победы, д. 112б</div><div class="phone">+7 (4742) 40-07-28</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.020936982273, 45.048540542328], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Лысково, ул. Космонавтов, д. 9</div><div class="phone">(83149) 5-88-77</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.444804028556, 52.213535020081], {
        balloonContent: '<div class="baloon-content"><div class="name">Техно-М ООО </div><div class="address">Можга	 Вокзальная ул, дом № 2в, </div><div class="phone">7 (34139) 3-61-10</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.577465, 42.049276], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Муром, ул. Льва Толстого, д. 12</div><div class="phone">+7 (49234) 7-49-90, 7-49-91</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.588605152494, 42.005114224537], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Муром,  Владимирское шоссе, 9 </div><div class="phone">(49234) 7-78-92, 7-78-93</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.716412660843, 87.794576337384], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г.Мыски, ул. Советская, дом 51Б/2</div><div class="phone">8(38439) 9-34-41</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.288804066114, 44.05877082209], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г.Нижний Новгород, ул. Композитора Касьянова, 6Г</div><div class="phone">(831) 410-44-25</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.313705796711, 44.00958], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г.Нижний Новгород, ул. Белинского, 45</div><div class="phone">(831) 218-01-66, 218-01-67</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.263106927415, 43.88219], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г.Нижний Новгород, ул. Дьяконова, 19</div><div class="phone">(831) 253-08-13, 257-21-97</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.321852885276, 43.953837271164], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г.Нижний Новгород, ул. Коммунистическая, 14</div><div class="phone">(831) 246-39-45, 277-60-14</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.337551450435, 43.936256381614], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Нижний Новгород, Мещерский б-р, д. 5, корп. А, пом.3</div><div class="phone">+7 (831) 220–47–87, 220–47–88</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.231619888457, 43.945382591523], {
        balloonContent: '<div class="baloon-content"><div class="name">Кириллов Денис Сергеевич ИП</div><div class="address">Нижний Новгород г, Гагарина пр-кт, дом № 115</div><div class="phone">89107904620</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.266269503395, 44.094463086243], {
        balloonContent: '<div class="baloon-content"><div class="name">Карасев Евгений Васильевич ИП</div><div class="address">Кстовский р-н, Афонино д, Магистральная ул, строение 105</div><div class="phone">89107979777</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.305132146367, 43.937760707917], {
        balloonContent: '<div class="baloon-content"><div class="name">ТехторгНН</div><div class="address">Нижний Новгород г, Октябрьской Революции ул, дом № 72</div><div class="phone">+7 (929) 054-67-25</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.308169563191, 44.021799819032], {
        balloonContent: '<div class="baloon-content"><div class="name">КОМПАНИЯ ТЕХНОТУЛ ООО</div><div class="address">Нижний Новгород г, Ванеева ул, дом № 47</div><div class="phone">  8-910-134-15-04</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.344468101764, 43.839353385133], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">г. Нижний Новгород, ул. Культуры, д. 110А</div><div class="phone">+7 (831) 225-02-36</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.321597992006, 43.953116853425], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">г. Нижний Новгород, ул. Луначарского, д. 10/16</div><div class="phone">+7 (831) 215-05-94</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.362294711756, 43.860742192048], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">г. Нижний Новгород, ул.Свободы, д. 67 (ТЦ На Свободе)</div><div class="phone">+7 (831) 282-26-42</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.725801928394, 52.425470254564], {
        balloonContent: '<div class="baloon-content"><div class="name">Мегастрой</div><div class="address">г. Набережные Челны,  ул.Машиностроительная, 75</div><div class="phone">(8552) 34-80-80</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.718230059722, 52.414027297852], {
        balloonContent: '<div class="baloon-content"><div class="name">АМАЛИЯ ИНСТРУМЕНТ ООО</div><div class="address">Татарстан Респ, Набережные Челны г, Трубный проезд, дом № 3</div><div class="phone">8 (8552) 53-25-26</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.743372295973, 52.441835977754], {
        balloonContent: '<div class="baloon-content"><div class="name">Давлеев Р.Р. ИП</div><div class="address">Татарстан Респ, Набережные Челны г, 40 лет Победы ул, дом № 88</div><div class="phone">9046787766</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.669939187523, 52.341364710572], {
        balloonContent: '<div class="baloon-content"><div class="name">Спецгарант Торговый Дом ООО</div><div class="address">Татарстан Респ, Набережные Челны г, Старосармановская ул, дом № 29а</div><div class="phone">8 (8552) 999-298</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.638416802321, 51.796194334901], {
        balloonContent: '<div class="baloon-content"><div class="name">Мастер (Нижнекамск)</div><div class="address">Нижнекамск, проспект Строителей, 55</div><div class="phone">8 (8555) 306‒206</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.635863610808, 51.810196800507], {
        balloonContent: '<div class="baloon-content"><div class="name">Мастер (Нижнекамск)</div><div class="address">г. Нижнекамск, Химиков проспект, 53/1</div><div class="phone">8 (8555) 306‒206</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.655357979849, 51.825206615327], {
        balloonContent: '<div class="baloon-content"><div class="name">Мастер (Нижнекамск)</div><div class="address">г. Нижнекамск, ул. Менделеева, 31</div><div class="phone">8 (8555) 306‒206</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.629547631947, 51.78871986136], {
        balloonContent: '<div class="baloon-content"><div class="name">Мастер (Нижнекамск)</div><div class="address">г. Нижнекамск, ул. Корабельная 44</div><div class="phone">8 (8555) 306‒206</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.017460246635, 38.304907138329], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Новомосковск, ул.Калинина, 30</div><div class="phone">(48762) 7-05-49, 7-05-59</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.049064682529, 82.960561194703], {
        balloonContent: '<div class="baloon-content"><div class="name">СтройИнструмент</div><div class="address">Новосибирская обл, Новосибирск г, Дзержинского пр-кт, дом № 1/4</div><div class="phone">8 (383) 363-90-80</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.493647519256, 53.495777203705], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Октябрьский,  ул. Кувыкина, 46/2</div><div class="phone">(34767) 3-35-60, 3-36-60</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.962563026964, 43.067473728836], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Павлово, ул. Коммунистическая, 1</div><div class="phone">(83171)2-15-15</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.225115219285, 44.937848457672], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Пенза, ул.Рахманинова, 4А</div><div class="phone">(8412) 99-11-05, 99-11-07</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.207988499886, 44.977003906746], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Пенза,  ул. Карпинского, 52</div><div class="phone"></div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.182005005808, 45.015577550926], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Пенза,  ул.Кирова, 3</div><div class="phone">(8412) 99-88-78</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.864547881484, 43.801372525131], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">Первомайск, ул. Октябрьская, д.1, корп.а</div><div class="phone">8-960-177-72-73</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.366877208567, 55.918382271164], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Салават, ул. Уфимская, строение 27</div><div class="phone">(3476)35-70-00</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.140546924182, 50.173632314099], {
        balloonContent: '<div class="baloon-content"><div class="name">Садовая Техника</div><div class="address">г. Самара, Южное шоссе, д. 5</div><div class="phone">8-927-260-92-03, 8-927-203-23-99</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.198439620702, 50.189719784638], {
        balloonContent: '<div class="baloon-content"><div class="name">ООО САМАРАИНСТРУМЕНТСНАБ</div><div class="address">Авроры ул, дом № 114 А, корпус 5, маг. 220 Вольт</div><div class="phone">89372075463</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.199545924364, 50.258698562409], {
        balloonContent: '<div class="baloon-content"><div class="name">ООО Аверс</div><div class="address">Самара	Заводское шоссе 9 Б</div><div class="phone">8-846-207-11-00</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.195244455583, 45.167812093254], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Саранск, ул.Васенко, 13</div><div class="phone">8-834-2-255255</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.191588237345, 45.194956403687], {
        balloonContent: '<div class="baloon-content"><div class="name">Годунов А.А.</div><div class="address"> Саранск г, Рабочая ул, дом № 103</div><div class="phone">8-927-276-83-67</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.221999848264, 45.207960946015], {
        balloonContent: '<div class="baloon-content"><div class="name">Комарова М.А. ИП</div><div class="address"> Саранск г, Александровское ш, дом № 6</div><div class="phone">8-953-028-78-76</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.224909681127, 45.213154319032], {
        balloonContent: '<div class="baloon-content"><div class="name">Ларькина Н.А. ИП</div><div class="address">Саранск г, Александровское ш, дом № 8г</div><div class="phone">8-937-514-30-01</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.171221974379, 45.172456176179], {
        balloonContent: '<div class="baloon-content"><div class="name">Махмутов Рафаэль Риянович ИП</div><div class="address"> Саранск, Берсеневка с, Новая ул, дом № 9А</div><div class="phone">8-933-399-90-13</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.191282069841, 45.194944657655], {
        balloonContent: '<div class="baloon-content"><div class="name">Русаков С В ИП</div><div class="address"> Саранск г, Рабочая ул, дом № 95А</div><div class="phone">8-927-276-12-80</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.194993514462, 45.153774207917], {
        balloonContent: '<div class="baloon-content"><div class="name">Сапфир ООО</div><div class="address"> Саранск г, п.Николаевка, Октябрьская ул, дом № 43</div><div class="phone">8-927-181-67-77</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.235270580555, 45.070881877229], {
        balloonContent: '<div class="baloon-content"><div class="name">СтройТемп ООО</div><div class="address"> Блохино д, Заречная ул, дом № 98</div><div class="phone">8-927-179-41-31</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.205552731872, 45.17804095395], {
        balloonContent: '<div class="baloon-content"><div class="name">Элит-инструмент</div><div class="address"> Саранск г, Строительная ул, дом № 1</div><div class="phone">8-927-276-27-10  </div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.471060328456, 53.808049776704], {
        balloonContent: '<div class="baloon-content"><div class="name">Арсланов Р.З ИП</div><div class="address">Сарапул	 Степана Разина, дом № 35</div><div class="phone"> (34147) 4-05-35</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.564847716802, 46.021484550926], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Петриченко В.В.</div><div class="address">Саратов, ул.Танкистов,д.72</div><div class="phone">(8452)64-94-84, 55-75-60</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.620730499975, 45.976618109787], {
        balloonContent: '<div class="baloon-content"><div class="name">Строй-С </div><div class="address">Саратов ул. Вольский тракт, д. 1</div><div class="phone">(8452) 67-75-36</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.529847653515, 46.00435086136], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">г. Саратов, ул.Астраханская, д.88 к.2</div><div class="phone">+7 (8452) 65-09-87 / +7 (8452) 65-09-89</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.938495761401, 43.303363269836], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Саров, ул. Зернова, д.20</div><div class="phone">8(83130) 6-20-10</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.919063850003, 43.34980264418], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Саров,  ул.Чапаева, 26</div><div class="phone">(83130) 3-57-69, 3-54-05ф</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.793588909892, 44.496864682209], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Семенов, ул.Краюшкина, дом 13 </div><div class="phone">(83162) 5-96-00</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.527443, 45.457799], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г.Сергач ул.Свердлова д.69 павильон № 3</div><div class="phone">+7 (831) 437-82-97</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([43.568842472443, 39.75551736136], {
        balloonContent: '<div class="baloon-content"><div class="name">Уровень</div><div class="address">Сочи	20 Горнострелковой дивизии ул, дом № 16</div><div class="phone">8-988-233-44-59, 8(862)241-25-92</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.159661775769, 48.442034364418], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Сызрань, ул. Интернациональная, д. 126</div><div class="phone">8 (8464) 913-557</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.188916728533, 48.499687903687], {
        balloonContent: '<div class="baloon-content"><div class="name">ООО Оптторг</div><div class="address">Сызрань 	Локомобильная ул, дом № 22</div><div class="phone">8-8464-37-57-56</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.154359658066, 48.449076903687], {
        balloonContent: '<div class="baloon-content"><div class="name">ООО Электра</div><div class="address">Сызрань 	Интернациональная 46</div><div class="phone">8-8464-98-38-38</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.757948343941, 41.433929398811], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Тамбов, б-р Энтузиастов, 1К</div><div class="phone">(4752) 70-30-67, 70-30-66ф</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.726144062607, 41.448825660309], {
        balloonContent: '<div class="baloon-content"><div class="name">Скворцов В.И. ИП</div><div class="address">Тамбов г, Державинская ул, дом № 17</div><div class="phone">89304731022</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.87300806307, 35.861282559524], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Тверь, Петербургское ш., 30</div><div class="phone">(4822) 50-42-30, 50-46-49</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.839152598615, 35.895179873016], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Тверь, пр-кт Чайковского, 35</div><div class="phone">(4822) 39-60-60</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.857615272976, 35.852367607392], {
        balloonContent: '<div class="baloon-content"><div class="name">Пшеницын Ю.А. ИП</div><div class="address">Тверь г, 4-й Красной Слободы пер, дом № 11, строение 1 А</div><div class="phone">Юрий +7 (904) 001-01-91</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.501623886221, 49.292030988343], {
        balloonContent: '<div class="baloon-content"><div class="name">ООО Садовая Техника</div><div class="address">Тольятти	ул. Степана Разина 97</div><div class="phone">89277843328</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.53858947531, 49.298655014832], {
        balloonContent: '<div class="baloon-content"><div class="name">ООО Инструмент Сервис</div><div class="address">Тольятти	ул Офицерская 24</div><div class="phone">8-8482-51-54-48 (13)</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([59.129733808656, 37.927652160713], {
        balloonContent: '<div class="baloon-content"><div class="name">Мастер-Инструмент</div><div class="address">г. Череповец, Пр-кт Победы, д. 58а</div><div class="phone">(8202) 50-56-34</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.37150900202, 45.516621728836], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Шарья,  ул. Чапаева ул, дом № 32 </div><div class="phone">8(49499) 5-04-01</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.672540368762, 46.618087266864], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Шахунья, пл. Торговая, 8</div><div class="phone">(83152) 2-10-54</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.839083927951, 41.391788932541], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Шуя, ул.Свердлова, д.109 а</div><div class="phone">(49351) 4-57-96</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.851487795104, 41.355495637044], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Шуя, Вокзальная ул, д. 2</div><div class="phone">8(49351) 4-71-88</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([45.032110823128, 39.024676131283], {
        balloonContent: '<div class="baloon-content"><div class="name">АРСЕНАЛТРЕЙДИНГ</div><div class="address">г. Краснодар, АФ Солнечная, 9/5</div><div class="phone">(861) 212-6-212; 212-6-215</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([45.015390853421, 39.08947912851], {
        balloonContent: '<div class="baloon-content"><div class="name">Вираж</div><div class="address">Краснодар	Василия Мачуги, 174</div><div class="phone">+7 (861) 212-70-10</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([45.025231357334, 39.070556030671], {
        balloonContent: '<div class="baloon-content"><div class="name">Уровень</div><div class="address">Краснодар	Сормовская ул, дом № 16/1</div><div class="phone">8-988-233-44-59, 8(862)241-25-92</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([59.688117667559, 56.688623619713], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Мальцева Ю.А.</div><div class="address">г. Соликамск, ул.Кирова, д.4</div><div class="phone">(834) 253-476-36</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.195184873373, 37.548585813492], {
        balloonContent: '<div class="baloon-content"><div class="name">ООО &quot;Инструмент-Сервис&quot;</div><div class="address">г.Тула, ул.Одоевское ш-е, д.78, оф.1</div><div class="phone">(4872)39-23-96,39-02-16</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.509078958799, 37.116062020081], {
        balloonContent: '<div class="baloon-content"><div class="name">Волуева Т.М. ИП</div><div class="address">Тульская обл, Алексинский р-н, Алексин г, Тульская ул, дом № 136 А</div><div class="phone"></div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.138247676422, 38.118853393848], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">Тульская обл. г.Ефремов, ул Свердлова, 4</div><div class="phone">8-953-952-89-63</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.154675012046, 38.859428271164], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г.Киржач, ул. Большая Московская, д. 58</div><div class="phone">8-49237-2-03-02</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.970538488141, 86.722029728836], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК</div><div class="address">г. Киселевск, ул.Томская, д.20/1</div><div class="phone">8(3846) 42-22-54</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.436710598546, 56.045757228836], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Ишимбай, ул. Машиностроителей, 18</div><div class="phone">(3479) 44-20-38</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.444054314683, 56.030585607392], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Горбунов А.Ю.</div><div class="address">Ишимбай	ул. Бульварная, 14</div><div class="phone">8(927) 319-77-77</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.841893, 55.118676], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Оренбург, Шарлыкское шоссе, д.1</div><div class="phone">+7 (3532) 50-05-25</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.769748, 55.145877], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Оренбург, ул. 60 лет Октября, д. 1/1</div><div class="phone">+7(3532) 50-02-35</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.799787318455, 55.150411988343], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Пода ДП</div><div class="address">Оренбург	ул. Монтажников, 17/1</div><div class="phone">83532919117</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.817700382179, 55.249723049165], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Крюкова ОМ</div><div class="address">Оренбург	16 Линия ул, дом № 1</div><div class="phone">83532450230</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.847285658359, 55.106397284638], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Крюкова ОМ</div><div class="address">Оренбург	Терешковой ул, дом № 291</div><div class="phone">83532401616</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.786989841439, 55.075372789918], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Крюкова ОМ</div><div class="address">Оренбург	Братьев Коростелевых пр-кт, дом № 1</div><div class="phone">89128494668</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.72797041975, 55.093152776704], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Крюкова ОМ</div><div class="address">Оренбург	Донгузская ул, дом № 5</div><div class="phone">83532663022</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.781335428348, 55.084518403687], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Литвинов АИ</div><div class="address">Оренбург	Цвилинга ул, дом № 108</div><div class="phone">83532309496</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([43.036214463109, 44.656614451864], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">Владикавказ, Костанаева ул, д. 78</div><div class="phone">8(8672)99-56-56</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.831507735939, 28.316593415344], {
        balloonContent: '<div class="baloon-content"><div class="name">&quot;Мастер&quot; Алмазная</div><div class="address">г.Псков, ул. Леона Поземского, 92</div><div class="phone">8(8112) 79-34-03</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.337725394252, 86.132075593254], {
        balloonContent: '<div class="baloon-content"><div class="name">Кемерово</div><div class="address">г.Кемерово, ул. Тухачевского, д.22В</div><div class="phone">8 (3842) 90-09-32</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.744963290354, 87.155696771164], {
        balloonContent: '<div class="baloon-content"><div class="name">Новокузнецк</div><div class="address">г. Новокузнецк, пр-кт Октябрьский, д.66 А</div><div class="phone">(3843) 200-782, 200-783</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.688843438138, 88.052941186508], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г. Междуреченск, ул. Интернациональная, д.4</div><div class="phone">8 (38475)3-93-10</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.698629957765, 86.209930750332], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">г.Ленинск-Кузнецкий, пр. Ленина, 90 Б</div><div class="phone">(38456) 9-10-99</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([43.794225560646, 131.9957453411], {
        balloonContent: '<div class="baloon-content"><div class="name">ДВ-Инструмент</div><div class="address">г. Уссурийск, ул.Раковская, д.23</div><div class="phone">8(4234)262-600</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([48.795553206873, 44.777785224884], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">Волгоградская обл., г. Волжский, ул. Пушкина, д. 39, строение 11/2</div><div class="phone">8 (8443) 55-63-55, 8 (937) 702-63-55</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.475867584074, 44.214556788361], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">Пензенская область, г. Сердобск, ул. Тюрина, д. 7</div><div class="phone">8(84167) 57988</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.177238549959, 61.427725873016], {
        balloonContent: '<div class="baloon-content"><div class="name">Ударник</div><div class="address">г.Челябинск, ул. Артиллерийская, 102</div><div class="phone">8(800)700-57-49</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.179160746689, 61.362731805557], {
        balloonContent: '<div class="baloon-content"><div class="name">Ударник</div><div class="address">г. Челябинск, ул. Партизанская, 32</div><div class="phone">8 (351) 776-25-49</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.170149287201, 61.47255085582], {
        balloonContent: '<div class="baloon-content"><div class="name">ООО Торговая Компания «Товары для дома и сада»</div><div class="address">г. Челябинск, ул. Танкистов, д.177А, офис 205</div><div class="phone">8(351)223-55-20, 8-982-280-92-99, 8-982-369-18-89, 8-919-123-55-20</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.303521841118, 50.105425857147], {
        balloonContent: '<div class="baloon-content"><div class="name">Инструмент</div><div class="address">Республика Татарстан, Алексеевский р-н, пгт.Алексеевское, ул.Казакова,10А</div><div class="phone">8-917-394-85-92</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.20763527993, 58.559596721747], {
        balloonContent: '<div class="baloon-content"><div class="name">СТРОЙЭКОНОМ</div><div class="address">Оренбургская обл, Орск г, Карла Маркса, дом № 3</div><div class="phone">8 (3537) 26-61-21</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.210297637112, 58.597117504299], {
        balloonContent: '<div class="baloon-content"><div class="name">ЭЛЕКТРОМАРКЕТ</div><div class="address">460000, Оренбургская обл, Орск г, Вокзальное шоссе ул, дом № 34</div><div class="phone">8-3537-24-24-95</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.925937611798, 54.740931266542], {
        balloonContent: '<div class="baloon-content"><div class="name">Элемент</div><div class="address">Оренбургская обл, Шарлыкский р-н, Шарлык с, Советская ул, дом № 42в</div><div class="phone">8-912-345-45-33</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.901438843662, 49.921231], {
        balloonContent: '<div class="baloon-content"><div class="name">Инструменты</div><div class="address">Республика Татарстан, Алькеевский район, п.Базарные Матаки,ул.Ленина,2</div><div class="phone">8-937-008-44-34</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.90388494916, 49.924596519323], {
        balloonContent: '<div class="baloon-content"><div class="name">Инструменты</div><div class="address">Республика Татарстан, Алькеевский район, п.Базарные Матаки,Крайнова ул, дом № 76</div><div class="phone"></div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.461943883458, 50.146098728836], {
        balloonContent: '<div class="baloon-content"><div class="name">ВТК</div><div class="address">Республика Татарстан, Рыбно-Слободский район, Рыбная Слобода, ул. Ленина, д. 67А</div><div class="phone">8 (84361) 2-33-18, 8-904-669-00-79</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.465427583304, 50.151790134283], {
        balloonContent: '<div class="baloon-content"><div class="name">Стройматериалы ВТК</div><div class="address">Республика Татарстан, Рыбно-Слободский район, Рыбная Слобода, ул. Шаймарданова д. 41Б</div><div class="phone">8 (84361) 2-28-04, 8-904-6701959</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.650703150144, 50.680683246211], {
        balloonContent: '<div class="baloon-content"><div class="name">Биг-Шоп</div><div class="address">Республика Татарстан, Рыбно-Слободский район, с.Мамли-Козяково-Челны, ул.Центральная, магазин Биг Шоп</div><div class="phone">8 (84361) 3-15-03, 8-951-062-21-00</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.107507813255, 49.889565453191], {
        balloonContent: '<div class="baloon-content"><div class="name">АГРОСНАБ ООО</div><div class="address">Татарстан Респ, Арский р-н, Нижние Метески с, Солнечная, дом № 1</div><div class="phone">8 (84366) 3-94-44</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.094613478375, 49.856427510724], {
        balloonContent: '<div class="baloon-content"><div class="name">Сафин Рустам Мансурович ИП</div><div class="address">Татарстан Респ, Арский р-н, Арск г, Западная ул, дом № 2/3</div><div class="phone">8-905-039-75-77</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.096647484523, 49.871265018575], {
        balloonContent: '<div class="baloon-content"><div class="name">Тайд-Фойл</div><div class="address">г. Арск, ул. Вагизовых, д. 3 </div><div class="phone">8(84366)3-27-23</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.124357003641, 49.19490048641], {
        balloonContent: '<div class="baloon-content"><div class="name">Хозтовары</div><div class="address">Республика Татарстан, Высокогорский р-н, п. Дубьязы, ул. Авдеева, д. 5</div><div class="phone">8-917-248-60-93</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.979994693137, 49.032770476995], {
        balloonContent: '<div class="baloon-content"><div class="name">СтройДом</div><div class="address">Республика Татарстан, Спасский р-н, г. Болгар, ул.Рыночная д. 6В</div><div class="phone"></div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.543521234548, 52.024594227388], {
        balloonContent: '<div class="baloon-content"><div class="name">магазин &quot;Техцентр&quot;</div><div class="address">Республика Татарстан, Лениногорский р-н, с. Старый Иштеряк, ул. Школьная, д. 8а</div><div class="phone">8-917-230-35-35</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.698506636013, 46.153720630012], {
        balloonContent: '<div class="baloon-content"><div class="name">Магазин Парусник</div><div class="address">Чувашская Республика, Красночетайский р-н, с. Красные Четаи, ул. Новая, д. 16</div><div class="phone"></div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.300168684453, 45.387958313492], {
        balloonContent: '<div class="baloon-content"><div class="name">Мир инструмента</div><div class="address">Саратовская область, г. Петровск, ул. Московская, д. 4 </div><div class="phone">89270563074</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.508988072436, 46.193242584656], {
        balloonContent: '<div class="baloon-content"><div class="name">Волжский берег</div><div class="address">Саратовская область, г. Энгельс, ул. Студенческая, д. 205 корп 5</div><div class="phone">8(8453)76-38-38, 8-917-984-57-50</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.525772984998, 46.228381214803], {
        balloonContent: '<div class="baloon-content"><div class="name">Волжская заводь</div><div class="address">Саратовская обл., г. Энгельс, Волжская заводь 1</div><div class="phone">89173021352</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.46018040099, 46.090348544454], {
        balloonContent: '<div class="baloon-content"><div class="name">Панорама</div><div class="address">Саратовская область, г. Энгельс, Волжский проспект, 43б</div><div class="phone">89173021352</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.462421073289, 46.140929658193], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">г. Энгельс, пр-т Химиков, д. 1 стр.5</div><div class="phone">+7(8453)-512-090</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.992492388133, 49.437886316146], {
        balloonContent: '<div class="baloon-content"><div class="name">777 Мелочей</div><div class="address">Самарская область, пгт. Безенчук, ул. Мамистова, д. 50 Г</div><div class="phone">8-937-070-70-36</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([48.762569187654, 44.536512486257], {
        balloonContent: '<div class="baloon-content"><div class="name">ООО ТД ЭПС (Магазин &quot;ЭПС&quot;)</div><div class="address">г. Волгоград, ул. Еременко 44</div><div class="phone">88442505857</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.293635163015, 57.823685584656], {
        balloonContent: '<div class="baloon-content"><div class="name">МК Электро</div><div class="address">Пермский край, Чусовой, ул. Механическая, д. 11       </div><div class="phone">8 (34256) 6-93-12</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.177798788894, 53.786566560852], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Давлетова М.Г.</div><div class="address">Республика Башкортостан, с.Бакалы, ул. Костина, д. 29 магазин «ЛИДЕР»</div><div class="phone">8-925-090-18-67</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([], {
        balloonContent: '<div class="baloon-content"><div class="name">Весна</div><div class="address">461880, Оренбургская обл, Матвеевский р-н, Матвеевка с, Первомайская ул, дом № 22</div><div class="phone">8-922-545-55-03</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([], {
        balloonContent: '<div class="baloon-content"><div class="name">ЭЛЕКТРОМАРКЕТ</div><div class="address">462353, Оренбургская обл, Новотроицк г, Советская ул, дом № 85</div><div class="phone">8-3537-643-770</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.406150891267, 57.58430247057], {
        balloonContent: '<div class="baloon-content"><div class="name">Мир инструмента</div><div class="address">462274, Оренбургская обл, Медногорск г, Герцена ул, дом № 1</div><div class="phone">8-35379-3-18-56</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([44.161030989487, 133.86085913988], {
        balloonContent: '<div class="baloon-content"><div class="name">ДВ-Инструмент</div><div class="address">с.Чугуевка, ул.Комсомольская, д.25</div><div class="phone">8(42372)2-27-03</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.822525546919, 38.96641985582], {
        balloonContent: '<div class="baloon-content"><div class="name">Магазин инструмента &quot;ДРЕЛЛЕР&quot;</div><div class="address">Орехово-Зуево, ул. Урицкого, д. 92, стр. 1, ТЦ &quot;БАРРИКАДА&quot;</div><div class="phone">+7 968 945‑46-56</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.836811028879, 38.246946141786], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">Кашира	Садовая ул.,д. 32</div><div class="phone">8 (49669) 22-6-33</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.531530856632, 43.684480339287], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">Пензенская обл, Нижнеломовский р-н, Нижний Ломов г, Розы Люксембург ул, дом № 34</div><div class="phone">8 (841-54) 4-39-67</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.599271960405, 55.935205615327], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Понамарева Л.А.</div><div class="address">Стерлитамак	ул. Суханова, 11б/2</div><div class="phone">+7 (3473) 23-17-14</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.616157518754, 55.892584832246], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Понамарева Л.А.</div><div class="address">Стерлитамак	ул. Караная Муратова, 6/2</div><div class="phone">8 (3473) 33-28-70</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([50.791874, 41.994748], {
        balloonContent: '<div class="baloon-content"><div class="name">Торговый дом &quot;Поланд&quot; </div><div class="address">г. Урюпинск, пер. Попова, д.39 </div><div class="phone">(84442) 3-88-95, 3-84-10, 8 (961) 07-77-071</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([50.078103913597, 43.256428403687], {
        balloonContent: '<div class="baloon-content"><div class="name">ООО Строй-опт</div><div class="address">Михайловка, ул. Тишанская, д. 35</div><div class="phone">79954071212</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.850803774635, 53.076752082753], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Инструмент</div><div class="address">Азнакаево, Ленина ул, д.42</div><div class="phone">8(85592)9-40-41</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([47.276729771661, 39.820987621175], {
        balloonContent: '<div class="baloon-content"><div class="name">Инструмент</div><div class="address">Ростовская обл, Аксайский р-н, Аксай г, Аксайский пр-кт, дом № 7а</div><div class="phone">+7 (928) 111-99-80</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.844927015575, 50.806932959798], {
        balloonContent: '<div class="baloon-content"><div class="name">Stihl</div><div class="address">Аксубаево пгт, Советская ул, дом № 3</div><div class="phone">+7 (919) 644-10-87</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([64.538889317373, 40.524818069164], {
        balloonContent: '<div class="baloon-content"><div class="name">Лес и Дом</div><div class="address">Архангельск, пр. Ломоносова, 135</div><div class="phone">+7 (8182) 65-51-57</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([64.576644616026, 40.507893060987], {
        balloonContent: '<div class="baloon-content"><div class="name">Лес и Дом</div><div class="address">Архангельск, пр. Никольский, 56/2</div><div class="phone">+7 (8182) 65-51-57</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([64.528205517589, 40.653559502126], {
        balloonContent: '<div class="baloon-content"><div class="name">Лес и Дом</div><div class="address">Архангельск, ул. Ленина, 29</div><div class="phone">+7 (8182) 62-04-53</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([64.527903385153, 40.568150581472], {
        balloonContent: '<div class="baloon-content"><div class="name">Лес и Дом</div><div class="address">Архангельск, пр. Ленинградский, д.6 к.1</div><div class="phone">+7 (8182) 63-90-22</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([64.532877357441, 40.594042332814], {
        balloonContent: '<div class="baloon-content"><div class="name">Лес и Дом</div><div class="address">Архангельск, пр. Московский, 25, корп. 4, стр. 1</div><div class="phone">+7 (8182) 60-03-76</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([64.558675091198, 40.578244290487], {
        balloonContent: '<div class="baloon-content"><div class="name">Лес и Дом</div><div class="address">Архангельск, Окружное шоссе, 13, 0 этаж</div><div class="phone">+7 (8182) 62-62-62</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.864067240159, 53.254207705831], {
        balloonContent: '<div class="baloon-content"><div class="name">Дубровин Дмитрий Анатольевич ИП</div><div class="address">Афанасьево, ул. Красных Партизан, д.14</div><div class="phone">8 (8332) 255-772</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.407694453694, 53.237996163503], {
        balloonContent: '<div class="baloon-content"><div class="name">Хасанов Руслан Раисович ИП</div><div class="address">Татарстан Респ, Бавлинский р-н, Бавлы г, Горького ул, дом № 3</div><div class="phone">89273354950</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.527058517204, 43.550502952527], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">Балахна, микрорайон Правдинск, пр. Дзержинского, д.50</div><div class="phone">8 (83144) 4 24 41</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.65164913314, 47.113480163503], {
        balloonContent: '<div class="baloon-content"><div class="name">Мясникова Елена Валентиновна</div><div class="address">Барыш г, Советская ул, дом № 129</div><div class="phone">8-908-480-34-73</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.650234205655, 47.103368383124], {
        balloonContent: '<div class="baloon-content"><div class="name">Погодин Дмитрий Николаевич ИП</div><div class="address"> Барыш г, 45 Стрелковой Дивизии ул, дом № 2</div><div class="phone">8-927-830-16-50</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([64.521918268228, 34.765923603979], {
        balloonContent: '<div class="baloon-content"><div class="name">Автолайн</div><div class="address">Беломорск, ул. Карельская, д.2А</div><div class="phone">8-921-459-21-77</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.95778422034, 58.39286809538], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Давыдов П.А.</div><div class="address">Белорецк, ул. Тюленина, 1/2</div><div class="phone">+7 (34792) 3-91-91</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([59.412688453218, 56.774854603978], {
        balloonContent: '<div class="baloon-content"><div class="name">Интсрумент-оружие</div><div class="address">Березники, пр. Советский, 2</div><div class="phone">8 (3424) 29-25-88</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.007031152712, 50.439408774909], {
        balloonContent: '<div class="baloon-content"><div class="name">АГРОСНАБ ООО</div><div class="address">Татарстан Респ, Сабинский р-н, Богатые Сабы пгт, Школьная ул, дом № 20</div><div class="phone">88436225141</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.009412409195, 50.450811663503], {
        balloonContent: '<div class="baloon-content"><div class="name">Габитов Ильнар Наилевич ИП</div><div class="address">ул. Г. Закирова, 80А, п. г. т. Богатые Сабы</div><div class="phone">8 (917) 278-19-71</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.784039735402, 44.778365748159], {
        balloonContent: '<div class="baloon-content"><div class="name">Гурьянов А.Г.</div><div class="address">Нижегородская обл, Большемурашкинский р-н, Большое Мурашкино рп, Базарная Площадь ул, дом № 9</div><div class="phone">8-915-945-18-15</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([61.064764845986, 50.099866663503], {
        balloonContent: '<div class="baloon-content"><div class="name">Москалюк Виталий Николаевич ИП </div><div class="address">Визинга, ул. Оплеснина, д. 49 Г</div><div class="phone">+7  (908) 696-11-48</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.099245264295, 40.023604561651], {
        balloonContent: '<div class="baloon-content"><div class="name">Моисеенко Л.А.</div><div class="address">Воронежская обл, Бобровский р-н, Бобров г, 22 Января ул, дом № 92</div><div class="phone">89802457027</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([50.857050194205, 39.06585673956], {
        balloonContent: '<div class="baloon-content"><div class="name">Маркет 36</div><div class="address"> Воронежская обл, Острогожский р-н, Острогожск г, Освобождения ул, дом № 48</div><div class="phone">89525551698</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.643831469783, 40.131541137044], {
        balloonContent: '<div class="baloon-content"><div class="name">Баскаков Н.Г.</div><div class="address">Воронежская обл, Панинский р-н, Панино рп, Железнодарожная, дом № 17в, корпус 2</div><div class="phone">+7 (920) 4219173</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([50.719341541399, 39.414630213765], {
        balloonContent: '<div class="baloon-content"><div class="name">Неваленый Ю.И.</div><div class="address"> Воронежская обл, Каменский р-н, пгт Каменка, Полевая ул, дом № 4</div><div class="phone">+7 (920) 2144037</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([50.983151826146, 39.504169832815], {
        balloonContent: '<div class="baloon-content"><div class="name">Ирхина Л.В.</div><div class="address">Воронежская обл, Лискинский р-н, Лиски г, Коммунистическая ул, дом № 54</div><div class="phone">89529575458</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([50.196318166756, 39.542006976995], {
        balloonContent: '<div class="baloon-content"><div class="name">Пасюгин С.Н.</div><div class="address">Воронежская обл, Россошанский р-н, Россошь г, Карла Либкнехта ул, дом № 6</div><div class="phone">89805458888</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.165034309775, 40.476102332815], {
        balloonContent: '<div class="baloon-content"><div class="name">Таран М.В.</div><div class="address">Липецкая обл, Добринский р-н, Добринка п, Октябрьская ул, дом № 32</div><div class="phone">+7 (920) 5053909</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.68868048721, 39.267316613241], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">г. Воронеж, Ленинский проспект, д. 158/2</div><div class="phone">8(473)288-70-34 / 288-70-35 / 288-70-36</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([], {
        balloonContent: '<div class="baloon-content"><div class="name">Варламов Иван Петрович ИП</div><div class="address">Татарстан Респ, Высокогорский р-н, Березкинское сельское поселение, 14 км автодороги Каменка-Дубъязы, Перекресток, помещение 1</div><div class="phone">89510631616</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.594877392604, 34.570666007406], {
        balloonContent: '<div class="baloon-content"><div class="name">СтройДом</div><div class="address">Тверская обл, Вышний Волочек, Рабочая, 93</div><div class="phone">+7 (920) 193-61-34</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.177284052449, 53.170630290487], {
        balloonContent: '<div class="baloon-content"><div class="name">Нелюбин И.П ИП</div><div class="address">Якшур-Бодья	ул  Строителей дом № 1</div><div class="phone">89127676247</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.30417565231, 47.886411103978], {
        balloonContent: '<div class="baloon-content"><div class="name">Дубровин Дмитрий Анатольевич ИП</div><div class="address">Яранск, ул. Кирова, д. 28</div><div class="phone">(8332) 256-476</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.30417565231, 47.886411103978], {
        balloonContent: '<div class="baloon-content"><div class="name">Ковалевский С.П. ИП</div><div class="address">Яранск, ул. К. Зинина, д. 2/а.</div><div class="phone">8-911-581-60-01</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.474331933319, 58.454358408985], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Нефедев ВА</div><div class="address">Гай,	Орское ш, дом № 17б</div><div class="phone">89877777889</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([], {
        balloonContent: '<div class="baloon-content"><div class="name">ООО Строй-опт</div><div class="address">Госпитомник,	пер. Школьный 1</div><div class="phone">79377021212</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([45.197723206568, 33.357342319032], {
        balloonContent: '<div class="baloon-content"><div class="name">Электроконтакт</div><div class="address">Заславского ул, дом № 18</div><div class="phone">+7 8 978 901 99 18</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.760045672489, 52.017747234376], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">Елабуга	Строителей, д. 25</div><div class="phone">8(85557) 4-59-49, 8(927)472-14-33</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.705675470871, 55.805145319032], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Горбунов А.Ю.</div><div class="address">Ермолаево	ул. 8 Марта, 1</div><div class="phone">8(927) 319-77-77</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.837727133266, 41.47290736136], {
        balloonContent: '<div class="baloon-content"><div class="name">Елагин В.В. ИП</div><div class="address">Жердевка г, Советская ул, дом № 43</div><div class="phone">89158698167</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([50.977690263098, 44.770900911622], {
        balloonContent: '<div class="baloon-content"><div class="name">Хозтоварищ</div><div class="address">Жирновск	ул. Карла Маркса, 158А</div><div class="phone">78445456489</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.979718354639, 48.014167326966], {
        balloonContent: '<div class="baloon-content"><div class="name">Мир инструментов</div><div class="address">Звенигово г	Охотина ул, дом № 10 Б</div><div class="phone">(905) 008-30-70</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.975636643148, 37.182254139131], {
        balloonContent: '<div class="baloon-content"><div class="name">Инструмент-Опт</div><div class="address">Зеленоград г, Заводская ул, дом № 18, строение 1</div><div class="phone">+7 (495) 6510717</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.098630673125, 50.408873269288], {
        balloonContent: '<div class="baloon-content"><div class="name">Габдрахманова Чулпан Илдусовна ИП</div><div class="address"> Илебер д, Мелиораторов ул, дом № 1а</div><div class="phone">8(84362)49-1-40</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.848755194774, 46.368210759507], {
        balloonContent: '<div class="baloon-content"><div class="name">АрбатИнжиниринг ООО</div><div class="address"> Инза г, Гагарина ул, дом № 37</div><div class="phone">8-927-815-77-66</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.854412267045, 46.362574446015], {
        balloonContent: '<div class="baloon-content"><div class="name">Бутина Раиса Ивановна ИП</div><div class="address"> Инза г, Вокзальная ул, дом № 18</div><div class="phone">8-996-953-67-20</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.857487200056, 46.353710480409], {
        balloonContent: '<div class="baloon-content"><div class="name">Желнин Игорь Валерьевич ИП</div><div class="address"> Инза г, Красных Бойцов ул, дом № 34</div><div class="phone">8-927-806-71-91</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.546499503702, 50.057378885239], {
        balloonContent: '<div class="baloon-content"><div class="name">ПАРТНЕР (Кирово-Чепецк) ООО</div><div class="address">К.-Чепецк	пр-т Мира, д. 78</div><div class="phone"> (83361) 2‒62‒68</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.216879873039, 36.51332650554], {
        balloonContent: '<div class="baloon-content"><div class="name">Профинструмент ООО (4003038835)</div><div class="address">Калужская обл, Боровский р-н, Боровск г, Коммунистическая ул, дом № 137</div><div class="phone">8-9533269555</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.007425403278, 36.476005852761], {
        balloonContent: '<div class="baloon-content"><div class="name">Строительное оборудование ООО</div><div class="address">Калужская обл, Малоярославецкий р-н, Малоярославец г, Гагарина ул, дом № 37</div><div class="phone"></div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.564882474362, 36.271497115327], {
        balloonContent: '<div class="baloon-content"><div class="name">Хозяин ООО</div><div class="address">Калужская обл, Калуга г, Азаровская ул, дом № 34</div><div class="phone"></div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.50574978097, 36.272168225114], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">г. Калуга, ул. Никитина, д. 41, стр.1</div><div class="phone">+7 (4842) 90-11-73 / +7 (4842) 90-11-95</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([64.954908583317, 34.599932012147], {
        balloonContent: '<div class="baloon-content"><div class="name">Автолайн</div><div class="address">Кемь	р-кт. Пролетарский, д.27А.</div><div class="phone">8-921-012-91-33</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.154585381893, 38.858929419557], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">Киржач	Большая Московская ул, д. 58</div><div class="phone">8(49237)2-03-02</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.5829118603, 49.612168107392], {
        balloonContent: '<div class="baloon-content"><div class="name">Алтай-Сервис ООО</div><div class="address">Киров	ул. Производственная д. 28В</div><div class="phone"> (8332) 711-043</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.582094072773, 49.671466910294], {
        balloonContent: '<div class="baloon-content"><div class="name">Дубровин Дмитрий Анатольевич ИП</div><div class="address">Киров	ул. Блюхера д. 52А</div><div class="phone">(8332) 255-255</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.63844201203, 49.59268036136], {
        balloonContent: '<div class="baloon-content"><div class="name">МаркетСтрой ООО</div><div class="address">Киров	ул. Дзержинского д. 79</div><div class="phone">(8332) 25-51-52</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.597592016257, 49.639482932771], {
        balloonContent: '<div class="baloon-content"><div class="name">МаркетСтрой ООО</div><div class="address">Киров	ул. Хлебозаводской, д. 9</div><div class="phone">(922) 922-11-17</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.566218660352, 49.608190215852], {
        balloonContent: '<div class="baloon-content"><div class="name">МаркетСтрой ООО</div><div class="address">Киров	ул. Производственная, д. 35</div><div class="phone">(8332) 21-90-35</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.584624785597, 49.624673742311], {
        balloonContent: '<div class="baloon-content"><div class="name">НЕОЛИТ ООО</div><div class="address">Киров	ул. Пугачева, д. 1</div><div class="phone">(8332) 785-786</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.584336771011, 49.679093886491], {
        balloonContent: '<div class="baloon-content"><div class="name">Печенкин Михаил Александрович ИП</div><div class="address">Киров	ул. Блюхера, д. 23</div><div class="phone">(912) 731‒05‒38</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.390880630693, 33.21376577604], {
        balloonContent: '<div class="baloon-content"><div class="name">Загерс А.Я</div><div class="address">Брянская обл.,Клетнянский р-н,г.Клетня,Ленина пер.корп.2</div><div class="phone">89103316162</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.127548549305, 43.815289420884], {
        balloonContent: '<div class="baloon-content"><div class="name">Кудрявцев Роман Григорьевич ИП</div><div class="address">Нижегородская обл, Ковернинский р-н, Ковернино рп, Карла Маркса ул, дом № 24</div><div class="phone"></div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.035792201499, 43.91285714972], {
        balloonContent: '<div class="baloon-content"><div class="name">Давыдов К.Н. ИП</div><div class="address"> Ковылкино г, 50 лет Октября ул, дом № 13</div><div class="phone">8-927-173-15-43</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.718173866943, 36.78570486136], {
        balloonContent: '<div class="baloon-content"><div class="name">Альянс-МТ ООО</div><div class="address">Тверская обл, Конаково г, Привокзальная площадь, дом № 1/1</div><div class="phone">7(48242)37291</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([62.20310134909, 34.252433030671], {
        balloonContent: '<div class="baloon-content"><div class="name">Автолайн</div><div class="address">Кондопога	ул. Бумажников, д.12А</div><div class="phone">8-911-663-47-20</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([61.311370978622, 47.183086446015], {
        balloonContent: '<div class="baloon-content"><div class="name">Горбунов М. И. ИП </div><div class="address">Коряжма	пр. Ломоносова, д. 3, к.1</div><div class="phone">(81850) 5-18-25</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.310800273291, 48.338226844163], {
        balloonContent: '<div class="baloon-content"><div class="name">Шихарев Андриан Олегович ИП</div><div class="address">Котельнич	ул. Комсомольская, д. 7</div><div class="phone">(83342) 4-21-28</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.205837254936, 50.462530090196], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Зайцев</div><div class="address">Кошки 	ул Советская 10 а</div><div class="phone">8-846-522-25-74</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.592536766614, 37.021472030671], {
        balloonContent: '<div class="baloon-content"><div class="name">Гранд Инструмент</div><div class="address"> Московская обл, Краснознаменск г, Кобяковская ул, дом № 10</div><div class="phone">8 (495) 966-18-21</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.081369566477, 55.769558555802], {
        balloonContent: '<div class="baloon-content"><div class="name">Инетсрумент-оружие</div><div class="address">Краснокамск	ул.Геофизиков, 35</div><div class="phone">8 (34273) 2-05-32</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.436520871366, 43.789578427491], {
        balloonContent: '<div class="baloon-content"><div class="name">Козеняшева Елена Александровна</div><div class="address"> Краснослободск г, Кировский пер, дом № 45А</div><div class="phone"> 8-917-992-07-28</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.573915626812, 36.690685030671], {
        balloonContent: '<div class="baloon-content"><div class="name">Про-Тулс</div><div class="address">Московская обл, Одинцовский р-н, Кубинка г, Колхозная ул, дом № 6</div><div class="phone">8-926-186-88-70</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.545900610862, 47.686774030671], {
        balloonContent: '<div class="baloon-content"><div class="name">Рязапова Р.Р. ИП</div><div class="address"> Кузоватово рп, Октябрьская ул, дом № 7</div><div class="phone">8-927-820-67-80</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.166680012068, 50.900894776704], {
        balloonContent: '<div class="baloon-content"><div class="name">АГРОСНАБ ООО</div><div class="address">Татарстан Респ, Кукморский р-н, Манзарас с, Васильковая ул, дом № 45</div><div class="phone">8 (84364) 2-11-12</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.171437248168, 50.919598250245], {
        balloonContent: '<div class="baloon-content"><div class="name">Факел ТД ООО</div><div class="address">Республика Татарстан, Кукморский р-н, Манзарас с, Молодежная ул, дом № 40</div><div class="phone">8 (905) 025-11-33</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.760775514361, 55.78804970131], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Горбунов А.Ю.</div><div class="address">Кумертау	ул. 60 лет БАССР, 9</div><div class="phone">8(927) 319-77-77</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.106378851472, 55.329256776704], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Рамазанов Р.М.</div><div class="address">Кушнаренково	ул. Строительная, 20</div><div class="phone">+7 (987) 472-22-26</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.71497340806, 49.351081110047], {
        balloonContent: '<div class="baloon-content"><div class="name">Хозтовары</div><div class="address">Куюки	Овражная, 52а</div><div class="phone"></div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.403099598566, 49.554197784638], {
        balloonContent: '<div class="baloon-content"><div class="name">ВТК</div><div class="address">Лаишево	Горького ул, дом № 36А</div><div class="phone">(927) 457-16-17</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.111995294481, 47.620462424836], {
        balloonContent: '<div class="baloon-content"><div class="name">Михайлов Александр Геннадьевич ИП</div><div class="address">Майна рп, Советская ул, дом № 7</div><div class="phone">8-927-802-02-02</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.707003722087, 51.395013276704], {
        balloonContent: '<div class="baloon-content"><div class="name">Габитов Ильнар Наилевич ИП</div><div class="address"> Татарстан Респ, Мамадышский р-н, совхоза &quot;Мамадышский&quot; п, Сайдашева ул, дом № 11А</div><div class="phone">8 (85563) 3-62-07</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.72172529119, 51.408250607392], {
        balloonContent: '<div class="baloon-content"><div class="name">Низамеева Елена Владимировна ИП</div><div class="address">Татарстан Респ, Мамадышский р-н, Мамадыш г, ул. Тукая, дом № 40</div><div class="phone">7 (906) 330-07-67</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([62.912184658902, 34.463104419557], {
        balloonContent: '<div class="baloon-content"><div class="name">Автолайн</div><div class="address">Медвежьегорск	ул. Карла Либкнехта, д.7А</div><div class="phone">8-911-415-09-38</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.336323916181, 41.631528403687], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">Меленки	Красноармейская ул, д. 106</div><div class="phone">8(910)778 71 87</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.941102739987, 55.914926305787], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Горбунов А.Ю.</div><div class="address">Мелеуз	ул. Южная, 1А</div><div class="phone">8(927) 319-77-77</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.897402115416, 40.488467001557], {
        balloonContent: '<div class="baloon-content"><div class="name">Власова О.Н. ИП</div><div class="address">Тамбовская обл, Мичуринск г, Лаврова ул, дом № 25</div><div class="phone">89092334570 /84754592560</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.431436898962, 48.992062528016], {
        balloonContent: '<div class="baloon-content"><div class="name">Мир инструмента</div><div class="address">Морки пгт, 	Пушкина ул, дом № 2</div><div class="phone">(991) 462-96-01</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.444739474973, 41.810389321687], {
        balloonContent: '<div class="baloon-content"><div class="name">Петрова В.И. ИП</div><div class="address">Тамбовская обл, Моршанск г, Октябрьская пл, дом № 17А</div><div class="phone">7-909-231-62-80</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.54023356153, 42.196141572999], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">Навашино	Трудовая ул., д. 2</div><div class="phone">+7 910-878-95-38</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.54023356153, 42.196141572999], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">Навашино	Трудовая ул., д. 2</div><div class="phone">+7 910-878-95-38</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([44.644122005352, 41.944036464539], {
        balloonContent: '<div class="baloon-content"><div class="name">&quot;Гвоздь&quot;</div><div class="address">Невинномысск	Гагарина ул, дом № 5Б</div><div class="phone">+7 (8655) 47-30-37</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.09782883084, 54.26765435077], {
        balloonContent: '<div class="baloon-content"><div class="name">ПРОРАБ-ИСТРУМЕНТ ООО</div><div class="address">Нефтекамск	ул. Прмышленная, 6</div><div class="phone">+7 (917) 490-02-82</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.132730603805, 47.200666731721], {
        balloonContent: '<div class="baloon-content"><div class="name">Убин Аркадий Александрович ИП</div><div class="address"> Николаевка рп, Коммунальная ул, дом № 6</div><div class="phone">8-927-393-79-94</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.100883828308, 41.630861464509], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Пономарева Е.Н.</div><div class="address">Новохоперск	ул. Дзержинского 1</div><div class="phone">79601015029</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.109089098176, 47.478678580934], {
        balloonContent: '<div class="baloon-content"><div class="name">Техномаш ООО</div><div class="address">Чувашская Респ, Новочебоксарск г, Винокурова ул, дом № 55, корпус 3</div><div class="phone"> +7 (8352) 46-77-47</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.065974619259, 51.23812414972], {
        balloonContent: '<div class="baloon-content"><div class="name">Саматов Фаниль Азатович ИП</div><div class="address">Татарстан Респ, Новошешминский р-н, Новошешминск с, Ленина ул, дом № 13</div><div class="phone">7 (904) 671-34-31</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.880034198594, 38.478740914277], {
        balloonContent: '<div class="baloon-content"><div class="name">Усадьба Сад</div><div class="address">Ногинский р-н, Ногинск г, Ильича, дом № 21, корпус 3</div><div class="phone">89250758027</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.760194889096, 60.712278664093], {
        balloonContent: '<div class="baloon-content"><div class="name">Инструмент (ИП Караваев Д.А.)</div><div class="address">Озерск</div><div class="phone">89250758027 8902617614</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([60.975975771885, 32.966531903687], {
        balloonContent: '<div class="baloon-content"><div class="name">Автолайн</div><div class="address">Олонец	ул. Свободы, д.9</div><div class="phone">8-911-415-09-91</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.671503357321, 52.181932446015], {
        balloonContent: '<div class="baloon-content"><div class="name">Дубровин Дмитрий Анатольевич ИП</div><div class="address">Омутнинск	 ул. Коковихина, д. 53</div><div class="phone">(8332) 256-496</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.686276610997, 35.759341065064], {
        balloonContent: '<div class="baloon-content"><div class="name">Лежепеков Г.В. ИП</div><div class="address">Орловская обл, Кромской р-н, Кромы пгт, К. Маркса ул, дом № 36А</div><div class="phone"></div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.940643164096, 36.049381274049], {
        balloonContent: '<div class="baloon-content"><div class="name">Лира ООО</div><div class="address">Орловская обл, Орловский р-н, Орел г, Комсомольская ул, дом № 231</div><div class="phone">8-4862779586</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.682098610619, 35.758612028016], {
        balloonContent: '<div class="baloon-content"><div class="name">Смагин М.А. ИП</div><div class="address">Орловская обл, Кромской р-н, Кромы пгт, Свободы ул, дом № 54</div><div class="phone"></div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.811759578411, 37.249466826966], {
        balloonContent: '<div class="baloon-content"><div class="name">Цепков А.А. ИП (Кубометр)</div><div class="address">Орловская обл, Верховский р-н, Верховье пгт, Советская ул, дом № 13</div><div class="phone"></div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.400281880089, 49.061638733048], {
        balloonContent: '<div class="baloon-content"><div class="name">Елсукова Елена Николаевна ИП</div><div class="address">Оричи	 ул. Советская, д. 23-а</div><div class="phone">(83354) 2-16-39</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.600191591996, 44.543894401032], {
        balloonContent: '<div class="baloon-content"><div class="name">Сидорин Анатолий Николаевич  ИП</div><div class="address">Перевоз г, Школьная ул, дом № 12А</div><div class="phone">8 (83148) 5-13-95</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([61.773421184446, 34.351794321686], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">Петрозаводск	Повенецкая ул, д. 6</div><div class="phone">8-911-415-51-23</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([61.776700073189, 34.345302877229], {
        balloonContent: '<div class="baloon-content"><div class="name">Автолайн</div><div class="address">Петрозаводск	Лососинская ул, дом № 14</div><div class="phone">28-38-88   </div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([65.113935326275, 57.153567570344], {
        balloonContent: '<div class="baloon-content"><div class="name">Миронов С.Л. ИП</div><div class="address">Печора 	ул. Ленинградская, д. 25/14</div><div class="phone">(82142) 7-02-50</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([65.117414831606, 57.163038342835], {
        balloonContent: '<div class="baloon-content"><div class="name">Миронов С.Л. ИП</div><div class="address">Печора 	пр. Печорский пр., д. 56 </div><div class="phone">(82142) 7-00-49</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([50.524569554814, 36.699813759507], {
        balloonContent: '<div class="baloon-content"><div class="name">Ульянцев А.В.</div><div class="address">Разумное пгт, Придорожная ул, дом № 26А</div><div class="phone">8-930-086-91-31</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.570917911166, 38.259727080934], {
        balloonContent: '<div class="baloon-content"><div class="name">Вестстрой-РК</div><div class="address">Раменское г, Крымская ул, дом № 9</div><div class="phone">+7 (925) 539-03-20 </div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.662843435322, 36.295232488343], {
        balloonContent: '<div class="baloon-content"><div class="name">Электромир</div><div class="address">Тверская обл, пгт Редкино, Лесная,1</div><div class="phone">+7 (961) 015-55-56</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([47.267856276954, 39.689576006867], {
        balloonContent: '<div class="baloon-content"><div class="name">КПД+</div><div class="address">г. Ростов-на-Дону,  Октябрьский р-он, пер. Технологический, д. 8 Ж</div><div class="phone">+7 (863) 226-85-19</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.893283885996, 56.465316393098], {
        balloonContent: '<div class="baloon-content"><div class="name">Хайрулин Дамир Мухаметович ИП</div><div class="address">Башкортостан Респ, Гафурийский р-н, Красноусольский с, Калмыкова ул, дом № 6</div><div class="phone">89273050454</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([64.549775556742, 39.780367822984], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">Северодвинск	Ломоносова ул, д. 85</div><div class="phone">8(960)017-70-19</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([64.566764384586, 39.815123842835], {
        balloonContent: '<div class="baloon-content"><div class="name">ТМК Иструмент</div><div class="address">Северодвинск	Первомайская ул, д. 41</div><div class="phone">8-964-297-50-75</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([63.739474525968, 34.283476946015], {
        balloonContent: '<div class="baloon-content"><div class="name">Автолайн</div><div class="address">Сегежа	ул. Солунина, д.1</div><div class="phone">8-911-669-75-07</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.956775931543, 48.797201353425], {
        balloonContent: '<div class="baloon-content"><div class="name">Канеева Альфия Шагидулловна ИП</div><div class="address"> Сенгилеевский р-н, Сенгилей г, Котовского, дом № 1</div><div class="phone">8-927-437-98-06</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([59.588222563687, 60.572184112672], {
        balloonContent: '<div class="baloon-content"><div class="name">Инструмент-оружие</div><div class="address">Серов	ул.Каквинская 25а</div><div class="phone">+7 (900) 209-59-99</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.732611780884, 50.173545927491], {
        balloonContent: '<div class="baloon-content"><div class="name">Ракитин Виктор Алексеевич ИП </div><div class="address">Слободской	ул. Красноармейская, д. 92Ф</div><div class="phone">(83362) 5-02-48</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.584309840444, 48.955162488343], {
        balloonContent: '<div class="baloon-content"><div class="name">Дубровин Дмитрий Анатольевич ИП</div><div class="address">Советск	ул. Ленина, д. 68</div><div class="phone">(8332) 256-479</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.572726723899, 48.947453877229], {
        balloonContent: '<div class="baloon-content"><div class="name">Куклин Сергей Александрович ИП</div><div class="address">Советск	ул. Строителей, д. 31Б</div><div class="phone"> (912) 702-48-73</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([61.705327104502, 30.695521723786], {
        balloonContent: '<div class="baloon-content"><div class="name">Автолайн</div><div class="address">Сортавала	ул. Промышленная, д.32</div><div class="phone">8-911-415-11-53  </div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.308418919377, 37.911051623261], {
        balloonContent: '<div class="baloon-content"><div class="name">Пиком ООО</div><div class="address">Старый Оскол г, Дубрава квартал 1 мкр, дом № 54</div><div class="phone">89155212194</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([51.319021965125, 37.910141565064], {
        balloonContent: '<div class="baloon-content"><div class="name">Терем оскол</div><div class="address">Старый Оскол г, микрорайон Майский, дом № 4</div><div class="phone">89304385468 ;89159307099</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([50.784700367107, 36.465031538606], {
        balloonContent: '<div class="baloon-content"><div class="name">Комар Н.Н</div><div class="address">Яковлевский р-н, Строитель г, Заводская ул, дом № 7</div><div class="phone">+7 (919) 2238029</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([53.910803732535, 51.227043128541], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Владимиров</div><div class="address">Сухадол 	ул Гарина-Михайловского ул, дом № 1 Б</div><div class="phone">89379927933</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([61.661171401084, 50.834474274049], {
        balloonContent: '<div class="baloon-content"><div class="name">Панюкова В.В. ИП</div><div class="address">Сыктывкар	ул. Южная, д.7</div><div class="phone">(8212) 24-62-67</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([61.796849598629, 50.750719607392], {
        balloonContent: '<div class="baloon-content"><div class="name">Панюкова В.В. ИП</div><div class="address">Сыктывкар	ул. Мира д. 18/1</div><div class="phone">(904) 270-16-23</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([58.046574743961, 65.285150988343], {
        balloonContent: '<div class="baloon-content"><div class="name">Навигатор ООО</div><div class="address">Тавда 	ул.Чекистов 2а</div><div class="phone">7 (34360) 5-21-71 ; 3-23-73;</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.919902052469, 48.84032314972], {
        balloonContent: '<div class="baloon-content"><div class="name">Калашников Андрей Михайлович ИП</div><div class="address">Тетюши г, Ворошилова ул, дом № 13</div><div class="phone">7 (927) 415-11-54</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.059376920027, 34.98424574231], {
        balloonContent: '<div class="baloon-content"><div class="name">У Богатова</div><div class="address">Торжок, Лениградское ш. 10</div><div class="phone">+7 (915) 736-16-52</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.585812919362, 33.778521911622], {
        balloonContent: '<div class="baloon-content"><div class="name">Гришин В.А.ИП</div><div class="address">Трубчевск,Комсомольская ул.,дом 62</div><div class="phone">89102306666</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([55.886200884038, 50.216628927491], {
        balloonContent: '<div class="baloon-content"><div class="name">Габдрахманова Л.Г. ИП</div><div class="address">Татарстан Респ, Тюлячинский р-н, Тюлячи с, Фатыха Хусни ул, дом № 9</div><div class="phone">8 917 291 35 98</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.154850855344, 65.561888570344], {
        balloonContent: '<div class="baloon-content"><div class="name">ИНСТРУМЕНТ-ЦЕНТР ООО</div><div class="address">Тюмень	ул. 50 лет октября 6</div><div class="phone">8(3452)44-88-22</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.15709352119, 65.610429401032], {
        balloonContent: '<div class="baloon-content"><div class="name">Князев В.М. ИП</div><div class="address">Тюмень	ул. Барабинская 3а</div><div class="phone">8(3452) 58-57-89</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.160095039218, 65.477831935426], {
        balloonContent: '<div class="baloon-content"><div class="name">Метиз-Торг ООО</div><div class="address">Тюмень	ул.Бакинских комиссаров 12</div><div class="phone">89 222 667 178</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.193741108943, 65.612653895753], {
        balloonContent: '<div class="baloon-content"><div class="name">ОНИКС ГРУПП ООО</div><div class="address">Тюмень	ул. Тимофея Чаркова 12</div><div class="phone">89292212323</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.19235022773, 65.549415665589], {
        balloonContent: '<div class="baloon-content"><div class="name">Промторг ООО</div><div class="address">Тюмень	ул.Тимуровцев 1</div><div class="phone">8 (3452)69 61 06</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.138417400119, 65.65999286136], {
        balloonContent: '<div class="baloon-content"><div class="name">Пичугин В.Д. ИП</div><div class="address">Тюмень	 ул.Западносибирская 41</div><div class="phone">89292613046</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.134930891903, 65.489083316377], {
        balloonContent: '<div class="baloon-content"><div class="name">Подерягин А.П.  ИП</div><div class="address">Тюмень	ул Московский тракт 120</div><div class="phone">89322000016</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([52.844397122663, 32.68400245395], {
        balloonContent: '<div class="baloon-content"><div class="name">Дащенко Н.ИП</div><div class="address">Брянская обл,Унеченский р-н, г.Унеча,Володарского ул.,дом.6</div><div class="phone">89610007570</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([63.566313188716, 53.678076234376], {
        balloonContent: '<div class="baloon-content"><div class="name">Попов А.А. ИП </div><div class="address">Ухта	пр-т. Космонавтов, д. 26</div><div class="phone">(8216) 76-40-65</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([61.757405730879, 48.543476022736], {
        balloonContent: '<div class="baloon-content"><div class="name">Ковалевский С.П. ИП</div><div class="address">Урдома	ул. Гагарина, д. 10/1</div><div class="phone">8-911-688-77-45</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.110209644564, 50.007342837556], {
        balloonContent: '<div class="baloon-content"><div class="name">Куклин Сергей Александрович ИП</div><div class="address">Уржум	ул. Советская д. 30</div><div class="phone"> (912) 730-95-54</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([57.113247727513, 50.003908305818], {
        balloonContent: '<div class="baloon-content"><div class="name">Дубровин Дмитрий Анатольевич ИП</div><div class="address">Уржум	ул. Кирова, д. 40</div><div class="phone">(8332) 256-495</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([65.987341846454, 57.563495099458], {
        balloonContent: '<div class="baloon-content"><div class="name">Волк Вадим Борисович ИП</div><div class="address">Усинск	ул. 60 лет Октября, д. 16</div><div class="phone">(82144) 2-44-00</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([61.006223294199, 69.002839385163], {
        balloonContent: '<div class="baloon-content"><div class="name">Электро-мир</div><div class="address">Ханты-Мансийск	Энгельса ул, дом № 44</div><div class="phone">+7 (922) 7780999</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([47.407862742838, 47.269508826966], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Карагушева (Магазин &quot;Строитель&quot;)</div><div class="address">Харабали	ул. Лесхозная 6</div><div class="phone">79275719035</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([56.769020470575, 54.120028596803], {
        balloonContent: '<div class="baloon-content"><div class="name">Инструментальный центр Топсервис ооо</div><div class="address">Чайковский	Промышленная ул, дом № 8/6</div><div class="phone">7 (34241) 3-42-06</div></div>'
    }, {
    });
    myMap.geoObjects.add(Placemark);
    Placemark = new ymaps.Placemark([54.431919, 51.466737], {
        balloonContent: '<div class="baloon-content"><div class="name">ИП Зайцев С. Г.</div><div class="address">Самарская обл, Шенталинский р-н, Шентала ж/д ст., Советская ул, д. 10</div><div class="phone">89272995227, 8-846-522-25-74</div></div>'
    }, {
    });
}