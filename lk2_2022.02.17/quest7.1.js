let obj = {
    "Яблоко": "фрукт",
    "Арбуз": "ягода",
    "Помидор": "овощ",
    "Огурец": "овощ",
    "Вишня": "ягода"
}

let hashObj = {};

for (let k in obj) {
    let type = obj[k];
    console.log(type);
    // таблица[свойством] = есть свойство ? увеличиить на 1 иначе 1
    hashObj[type] = hashObj[type] ? hashObj[type] + 1 : 1;
}
console.log(hashObj);