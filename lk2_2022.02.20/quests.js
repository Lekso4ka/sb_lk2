/*
    q9.6 (js1)
*/

let numbers = [];
let n = 0;
while(++n) {
    numbers.push(n);
    if (n === 100) {
        break;
    }
}
console.log(numbers, n);

/*
    false => undefined, null, 0, ""
*/

let sum = 0;
for (let i = 1; i < numbers.length; i++) {
    // Простое число - если оно делится на себя и 1
    if (numbers[i]) {
        // console.log(numbers[i]);
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j]) {
                if (numbers[j] % numbers[i] === 0) {
                    numbers[j] = undefined;
                }
                // console.log(numbers[i], numbers[j]);
            }
        }
    }
}
// console.log(numbers);

for (let n of numbers) {
    if (n && n !== 1) {
        sum += n;
    }
}

console.log(sum);

/*
    quest 2.12 (js2);
*/

let dates = "23.04.1996 07.10.2002 15.08.1945";
// "23/04/1996"
dates = dates.split(" "); // делает из строки массив
console.log(dates);
let secondary = [];
for (let d of dates) {
    secondary.push(d.split(".").join("/"));
    // .join делает из масссива строку
    console.log(d);
}

dates = secondary;
console.log(dates);

/*
    question 2.4
*/

let tasks = [
    {title: "Умыться" , completed: true},
    {title: "Сделать зарядку" , completed: true},
    {title: "Приготовить завтрак" , completed: false}
];

let titles = tasks.map(function(obj) {
    // console.log(obj);
    // obj.smile = "smile"
    // return obj;
    // заменить/модифицировать элемент масссива на что-то другое
    return obj.title;
});

console.log(titles);


let nums = [];
while(nums.length < 10) {
    nums.push(getNumber(1000));
}

console.log(nums);
nums.sort(function(next, now) {
    return next - now;
});

console.log(nums);

/*
    quest 2.10
*/

let array = [[1,2,3],[1,2],[1,2,3,4]];

array.sort(function(el2, el1) {
    return (el2.length - el1.length);
});

console.log(array);


/*
    for-of только для массивов
    каждый итератор цикла for-of - элемент массива
*/


/*
    questioon 2.14
*/
let stranger = [10, 20, 33, 55, 100];

console.log(stranger);
let result = stranger.reduce(function(ololo, el) {
    let sum = ololo[0];
    let cnt = ololo[1];
    if (sum + el <= 50) {
        cnt++;
        sum += el;
        return [sum, cnt]
    }
    return ololo;
}, [0, 0]);

console.log(result[1]);