// объект cars
let cars = {
    Audi: {
        color: "black",
        country: "Germany",
        year: 2019
    },
    BMW: {
        color: "white",
        country: "Germany",
        year: 1999
    },
    Mercedes_Benz: {
        color: "grey",
        country: "Germany",
        year: 2017
    },
    Ford: {
        color: "green",
        country: "USA",
        year: 1967
    },
    Volkswagen: {
        color: "brown",
        country: "Germany",
        year: 2016
    },
    Honda: {
        color: "red",
        country: "Japan",
        year: 1998
    },
    Toyota: {
        color: "gold",
        country: "Japan",
        year: 2013
    },
    Maserati: {
        color: "black",
        country: "Italy",
        year: 2000
    },
    Chevrolet: {
        color: "yellow",
        country: "USA",
        year: 1981
    },
    Nissan: {
        color: "blue",
        country: "Japan",
        year: 1995
    }
};

function young() {
    let entries = Object.entries(cars);
    sorted = entries.sort(function (a, b) {
    return b[1].year - a[1].year;
});
    document.write(`<h2>Самые молодые автомобили:</h2>`);
    document.write(`<div>Автомобиль: ${sorted[0][0]}<li>Цвет: ${sorted[0][1].color}</li><li>Страна-производитель: ${sorted[0][1].country}</li><li>Год выпуска: ${sorted[0][1].year}</li></div>`);
    document.write(`<div>Автомобиль: ${sorted[1][0]}<li>Цвет: ${sorted[1][1].color}</li><li>Страна-производитель: ${sorted[1][1].country}</li><li>Год выпуска: ${sorted[1][1].year}</li></div>`);
    document.write(`<div>Автомобиль: ${sorted[2][0]}<li>Цвет: ${sorted[2][1].color}</li><li>Страна-производитель: ${sorted[2][1].country}</li><li>Год выпуска: ${sorted[2][1].year}</li></div>`);
    document.write(`<input type=\"button\" value=\"Вернуться\" name=\"back\" OnClick=\"location.href=\'index.html\'\">`)
}

function old() {
    let entries = Object.entries(cars);
    sorted = entries.sort(function (a, b) {
    return a[1].year - b[1].year;
});
    document.write(`<h2>Самые молодые автомобили:</h2>`);
    document.write(`<div>Автомобиль: ${sorted[0][0]}<li>Цвет: ${sorted[0][1].color}</li><li>Страна-производитель: ${sorted[0][1].country}</li><li>Год выпуска: ${sorted[0][1].year}</li></div>`);
    document.write(`<div>Автомобиль: ${sorted[1][0]}<li>Цвет: ${sorted[1][1].color}</li><li>Страна-производитель: ${sorted[1][1].country}</li><li>Год выпуска: ${sorted[1][1].year}</li></div>`);
    document.write(`<div>Автомобиль: ${sorted[2][0]}<li>Цвет: ${sorted[2][1].color}</li><li>Страна-производитель: ${sorted[2][1].country}</li><li>Год выпуска: ${sorted[2][1].year}</li></div>`);
    document.write(`<input type=\"button\" value=\"Вернуться\" name=\"back\" OnClick=\"location.href=\'index.html\'\">`)
}
