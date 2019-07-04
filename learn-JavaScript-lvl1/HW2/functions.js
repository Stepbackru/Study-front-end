//Полиндром
function polindrom() {
    let pal = prompt("Введите слово");
    function palDetect(det) {
        let origWord = "";
        for (i = 0; i <= det.length - 1; i++) {
            if (det.charAt(i) !== " ") {
                origWord += det.charAt(i);
            }
        }
        let revWord = "";
        let length = origWord.length;
        while(length > 0) {
            revWord += origWord.charAt(length - 1);
            length--;
        }
        if (origWord.toLowerCase() === revWord.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
    function getResult(w) {
        if (palDetect(w)) {
            document.write(`${w} - полиндром`);
        } else {
            document.write(`${w} - просто слово или цифра`);
        }
    }
    getResult(pal);
document.write(`<div><input type=\"button\" value=\"Вернуться\" name=\"back\" OnClick=\"location.href=\'index.html\'\"></div>`);
}

// Случайное целое число
function rn() {
    function ranNumber(){
        return Math.round(Math.random() * 100);
    }
    document.write(ranNumber());
document.write(`<div><input type=\"button\" value=\"Вернуться\" name=\"back\" OnClick=\"location.href=\'index.html\'\"></div>`);
}

//Случайный цвет rgb
function rr() {
    function randomRGB() {
        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255) - g;
        let result = r + "," + g + "," + b;
        return result;
    }
    document.write(`<div style=\'width: 500px; height: 300px; background: rgb(${randomRGB()})\'></div>`);
document.write(`<div><input type=\"button\" value=\"Вернуться\" name=\"back\" OnClick=\"location.href=\'index.html\'\"></div>`);
}
// Задача со звездочкой преобразование RGB в HEX
function rth() {
    function rgbToHex() {
        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        let rh = r.toString(16);
        let gh = g.toString(16);
        let bh = b.toString(16);
        if (rh.length == 1) {
            rh = '0' + r;
        }
        if (gh.length == 1) {
            gh = '0' + g;
        }
        if (bh.length == 1) {
            bh = '0' + b;
        }
        let result = "#" + rh + gh + bh;
        return result;
    }
    document.write(`<div style=\'width: 500px; height: 300px; background: ${rgbToHex()}\'></div>`);
    document.write(`<h2>Я хотел сделать вывод названия цвета в соответствии с изменяемым цветом, но не хватило времени, чтобы создать константы, а ставить 1 цвет по умолчанию не интересно)`);
document.write(`<div><input type=\"button\" value=\"Вернуться\" name=\"back\" OnClick=\"location.href=\'index.html\'\"></div>`);
}

// Меню бизнес ланч
function menu() {
    document.write(`
    <hr>
    <h2>Отдельно вынесенное задание с бизнес ланчами</h2>
    <hr>
    <h3>Какой сегодня день недели?<h3>
    <p><input name="day" type="radio" value="понедельник" onchange="checkday()"> Понедельник</p>
    <p><input name="day" type="radio" value="вторник" onchange="checkday()"> Вторник</p>
    <p><input name="day" type="radio" value="среда" onchange="checkday()"> Среда</p>
    <p><input name="day" type="radio" value="четверг" onchange="checkday()"> Четверг</p>
    <p><input name="day" type="radio" value="пятница" onchange="checkday()"> Пятница</p>
    <p><input name="day" type="radio" value="суббота" onchange="checkday()"> Суббота</p>
    <p><input name="day" type="radio" value="воскресенье" onchange="checkday()"> Воскресенье</p>`);
}
menu();
function checkday() {
    let today = document.getElementsByName('day');
    if (today[0].checked) {
            document.write(`
                <h3>Что выберите из меню на понедельник?</h3>
                <p><input class="mmenu" data-price="50" type="checkbox" value="old"> Оладьи с зелёным луком</p>
                <p><input class="mmenu" data-price="162" type="checkbox" value="paste"> Паста для бутербродов с зеленью</p>
                <p><input class="mmenu" data-price="360" type="checkbox" value="rolls"> Витаминные роллы от Константина Ивлева</p>
                <hr>
                <h3>Итого:</h3>
                <p>Цена: <span id="cost"></span>&#8381;</p>
                <button id="result">Рассчитать</button>`);
                document.getElementById('result').onclick = getRes;
                    function getRes() {
                        let menu = document.getElementsByClassName('mmenu');
                        let cost = 0;
                        for (let j = 0; j < menu.length; j++) {
                            if (menu[j].checked) {
                                cost += parseFloat(menu[j].getAttribute('data-price'));
                            }
                        }
                        document.getElementById('cost').innerHTML = cost;
                    }
                    document.write(`<div><button value="Вернуться" name="back" OnClick="location.href='index.html'">Вернуться к выбору дня недели</button></div>`);
    } else if (today[1].checked) {
            document.write(`
                    <h3>Что выберите из меню на вторник?</h3>
                    <p><input class="tmenu" data-price="450" type="checkbox" value="farsh"> Фаршированные помидоры</p>
                    <p><input class="tmenu" data-price="250" type="checkbox" value="omlet"> Летний омлет</p>
                    <p><input class="tmenu" data-price="120" type="checkbox" value="breakfast"> Бутерброд для завтрака</p>
                    <hr>
                    <h3>Итого:</h3>
                    <p>Цена: <span id="cost"></span>&#8381;</p>
                    <button id="result">Рассчитать</button>`);
                        document.getElementById('result').onclick = getRes;
                        function getRes() {
                            let menu = document.getElementsByClassName('tmenu');
                            let cost = 0;
                            for (let j = 0; j < menu.length; j++) {
                                if (menu[j].checked) {
                                    cost += parseFloat(menu[j].getAttribute('data-price'));
                                }
                            }
                            document.getElementById('cost').innerHTML = cost;
                        }
                    document.write(`<div><button value="Вернуться" name="back" OnClick="location.href='index.html'">Вернуться к выбору дня недели</button></div>`);
    } else if (today[2].checked) {
            document.write(`
                    <h3>Что выберите из меню на среду?</h3>
                    <p><input class="wmenu" data-price="350" type="checkbox" value="nuts"> Овсяная каша с орехами и изюмом</p>
                    <p><input class="wmenu" data-price="560" type="checkbox" value="soupcold"> Холодный суп из авокадо и креветок</p>
                    <p><input class="wmenu" data-price="420" type="checkbox" value="soupc"> Супчик из молодых кабачков</p>
                    <hr>
                    <h3>Итого:</h3>
                    <p>Цена: <span id="cost"></span>&#8381;</p>
                    <button id="result">Рассчитать</button>`);
                        document.getElementById('result').onclick = getRes;
                        function getRes() {
                            let menu = document.getElementsByClassName('wmenu');
                            let cost = 0;
                            for (let j = 0; j < menu.length; j++) {
                                if (menu[j].checked) {
                                    cost += parseFloat(menu[j].getAttribute('data-price'));
                                }
                            }
                            document.getElementById('cost').innerHTML = cost;
                        }
                        document.write(`<div><button value="Вернуться" name="back" OnClick="location.href='index.html'">Вернуться к выбору дня недели</button></div>`);
    } else if (today[3].checked) {
            document.write(`
                    <h3>Что выберите из меню на четверг?</h3>
                    <p><input class="thmenu" data-price="650" type="checkbox" value="gasp"> Гаспачо</p>
                    <p><input class="thmenu" data-price="250" type="checkbox" value="tomatosoup"> Томатный суп</p>
                    <p><input class="thmenu" data-price="320" type="checkbox" value="coldsoup"> Холодный летний суп</p>
                    <hr>
                    <h3>Итого:</h3>
                    <p>Цена: <span id="cost"></span>&#8381;</p>
                    <button id="result">Рассчитать</button>`);
                        document.getElementById('result').onclick = getRes;
                        function getRes() {
                            let menu = document.getElementsByClassName('thmenu');
                            let cost = 0;
                            for (let j = 0; j < menu.length; j++) {
                                if (menu[j].checked) {
                                    cost += parseFloat(menu[j].getAttribute('data-price'));
                                }
                            }
                            document.getElementById('cost').innerHTML = cost;
                        }
                        document.write(`<div><button value="Вернуться" name="back" OnClick="location.href='index.html'">Вернуться к выбору дня недели</button></div>`);
    } else if (today[4].checked) {
            document.write(`
                    <h3>Что выберите из меню на пятницу?</h3>
                    <p><input class="frmenu" data-price="350" type="checkbox" value="borsh"> Летний борщ</p>
                    <p><input class="frmenu" data-price="250" type="checkbox" value="chickensoup"> Лёгкий куриный суп</p>
                    <p><input class="frmenu" data-price="650" type="checkbox" value="caramel"> Кус-кус с овощами и луком в карамели</p>
                    <hr>
                    <h3>Итого:</h3>
                    <p>Цена: <span id="cost"></span>&#8381;</p>
                    <button id="result">Рассчитать</button>`);
                        document.getElementById('result').onclick = getRes;
                        function getRes() {
                            let menu = document.getElementsByClassName('frmenu');
                            let cost = 0;
                            for (let j = 0; j < menu.length; j++) {
                                if (menu[j].checked) {
                                    cost += parseFloat(menu[j].getAttribute('data-price'));
                                }
                            }
                            document.getElementById('cost').innerHTML = cost;
                        }
                        document.write(`<div><button value="Вернуться" name="back" OnClick="location.href='index.html'">Вернуться к выбору дня недели</button></div>`);
    } else if (today[5].checked) {
            document.write(`
                    <h3>Что выберите из меню на субботу?</h3>
                    <p><input class="samenu" data-price="230" type="checkbox" value="hotpotato"> Запечённый картофель в горчице</p>
                    <p><input class="samenu" data-price="450" type="checkbox" value="vegmeat"> Рагу с овощами с мясом</p>
                    <p><input class="samenu" data-price="370" type="checkbox" value="rulet"> Рулетики с сёмгой</p>
                    <hr>
                    <h3>Итого:</h3>
                    <p>Цена: <span id="cost"></span>&#8381;</p>
                    <button id="result">Рассчитать</button>`);
                        document.getElementById('result').onclick = getRes;
                        function getRes() {
                            let menu = document.getElementsByClassName('samenu');
                            let cost = 0;
                            for (let j = 0; j < menu.length; j++) {
                                if (menu[j].checked) {
                                    cost += parseFloat(menu[j].getAttribute('data-price'));
                                }
                            }
                            document.getElementById('cost').innerHTML = cost;
                        }
                        document.write(`<div><button value="Вернуться" name="back" OnClick="location.href='index.html'">Вернуться к выбору дня недели</button></div>`);
    } else if (today[6].checked) {
            document.write(`
                    <h3>Что выберите из меню на воскресенье?</h3>
                    <p><input class="sumenu" data-price="600" type="checkbox" value="rat"> Рататуй</p>
                    <p><input class="sumenu" data-price="320" type="checkbox" value="chicken"> Куриная грудка под шубкой</p>
                    <p><input class="sumenu" data-price="120" type="checkbox" value="vegluc"> Овощное лукошко</p>
                    <hr>
                    <h3>Итого:</h3>
                    <p>Цена: <span id="cost"></span>&#8381;</p>
                    <button id="result">Рассчитать</button>`);
                        document.getElementById('result').onclick = getRes;
                        function getRes() {
                            let menu = document.getElementsByClassName('sumenu');
                            let cost = 0;
                            for (let j = 0; j < menu.length; j++) {
                                if (menu[j].checked) {
                                    cost += parseFloat(menu[j].getAttribute('data-price'));
                                }
                            }
                            document.getElementById('cost').innerHTML = cost;
                        }
                        document.write(`<div><button value="Вернуться" name="back" OnClick="location.href='index.html'">Вернуться к выбору дня недели</button></div>`);
    }
}