/*
    Салат:
        name - Греческий
        size - 100
        products - list of products
        date
        price
        isFresh = true
        daysOfWellness

        eat()
        sell()
        cooke()
        make()
        delete()
        standInc()
*/

let car = {}; // пустой объект

car = {
    brand: "Hummer",
    model: "H3",
    color: "silver",
    year: 2009,
    "п р о б е г": 10000000000,
    // "коробка передач": "auto"
    robot: true,
    user: {
        name: "Igor",
        id: "o000oo10rus"
    },
    id: "1234567890",
};

/*
    Объект - неупорядоченная пара ключ-значение

    свойство объекта (слева) - brand, model, ccoolor, year
    значение, соответствующщее свойсству (справа) - "Hummer"...

    Свойство - всегда строковый тип данных
    Значение - любой тип данных
*/

console.log(car);

// console.log(car.brand); // .свойство => значение
// console.log(car.robot);
// car.color = "gold"; 
// console.log(car.user.name);
// car.wheels = 5;
// console.log(car.wheels);
// let key = "п р о б е г";
// console.log(car[key]);
// car.brand === car["brand"];


let numbers = "";
let count = 30;

for (let i = 0; i < count; i++) {
    numbers += getNumber();
}

console.log(numbers);

/* 
    сколько раз в строке повторяется каждое число? 
    1 - 2 раза
    2 - 8 раз
    4 - 6 раз
*/

let hashNumbers = {};

// console.log(hashNumbers[1]);

for (let i = 0; i < numbers.length; i++) {
    let n = numbers[i]; // каждый символ строки numbers
    if (hashNumbers[n]) {
        hashNumbers[n]++;
    } else {
        hashNumbers[n] = 1; // {"0": 2, "1": 2}
    }
    // console.log(n);
    // console.log(hashNumbers);
}

console.log(hashNumbers);

// Для всех свойств в объекте hashNumbers

for (let key in hashNumbers) {
    // console.log(key);
    // console.log(hashNumbers[key]);
    let result = ` ${key} - ${hashNumbers[key]} times`;
    console.log(result);
}
