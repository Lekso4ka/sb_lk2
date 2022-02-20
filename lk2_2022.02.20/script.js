// let array = [];

/*
    Массив - Упорядоченная последовательность элементов
*/

let bag = ["Table", 12, true, 2 > 3, "Petr", "Hello", 123];

console.log(bag.length);
console.log(bag[0]);
console.log(bag);
console.log(bag[bag.length - 1]); //Последний элемент масссива

["a", "b", "c", "d", "e"];
[1, 2, 3, 4, 5, 6, 7];


let fruits = ["Banana", "Apple", "Avokado"];
fruits[3] = "Pinapple";
fruits[3] = "Melon";
// fruits[99] = "Pinapple";
fruits[fruits.length] = "Pinapple";
fruits[fruits.length] = "Orange";

fruits.push("Tangerine");
fruits.unshift("Peach");

console.log(fruits.pop());
fruits.pop();

fruits.shift();
fruits.shift();
fruits.shift();
/*
    push(el) - добавить элемент в конец массива
    unshift(el) - добавить элемент в начало массива

    pop() - удалить (извлечь) последний элемент массива
    shift() - удалить (извлечь) первый элемент массива
*/

console.log(fruits);

/*
    queue - очередь
    FIFO - first in first out 
        push() => shift()


    stack - стек
    LIFO - last in first out
        push() => pop()
*/

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fr of fruits) {
    console.log("Переменная", fr);
}

/*
    Замыкания
*/

function step(n) {
    return function(cnt) {
        return cnt ** n;
    }
}

let quadro = step(2);
let tripple = step(3);
let octo = step(8);

console.log(quadro(3));
console.log(quadro(4));
console.log(quadro(5));


console.log(octo(2));