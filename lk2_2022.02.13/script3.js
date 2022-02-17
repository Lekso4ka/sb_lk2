/*
    Функция дыхания
*/

// function breath() {
//     console.log("Вдох");
//     console.log("Выдох");
// }

// let years = 0
// while (years++ <= 150) {
//     breath();
// }

/* 
Функции в css
    rgb()
    url()
    calc()
*/


// f(x) = x**2;

function parabola(x) { // х - аргумент (как буд-то переменная)
    return x ** 2;
}

let result = parabola(3);
console.log(parabola(1) + parabola(7));
console.log(result);


// 6.6 
function getPercent(v, t) {
    // процент v от числа t
    // t - 100%
    // v - ?%
    return v * 100 / t;
}
console.log(getPercent(6, 24));


/*
    В программе объявлена переменная num, в которой записано числовое значение. Используя цикл, возведите значение переменной в квадрат три раза. Каждый результат конкатенируйте через пробел и выведите в консоль.
*/

// 6.4 - на цикл

function convertNumToString(num, count = 3) {
    let result = "";
    for (let i = 0; i < count; i++) {
        if (i !== 0) {
            result += " ";
        }
        num **= 2; // num = num ** 2;
        result += num;
        // if (i !== count - 1) {
        //     result += " ";
        // }

        /*
            looks like margin-left or margin-right into html&css =)
        */
    }
    return result;
}

console.log(convertNumToString(2));

console.log(isNaN(2 / "a")); // вместо этого вернуть нуль (0)

function getRandom(min = 0, max = 11) { // от 0 до 10
    let number = Math.random();
    number *= (max - min);
    number += min;
    number = Math.floor(number); // не включая максимальное число
    return number;
}

console.log(getRandom());
console.log(getRandom(0,2));
console.log(getRandom(-10,10));
console.log(getRandom(5,20));