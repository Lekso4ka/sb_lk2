let partNumbers = ["ER1234COM", "FIV987451RU","GE123JO","P4321NO"];

let result = [];
let str = "g2oo1gle";
let reg = /[0-9][0-9][a-z][a-z]$/i; // \d => [0-9] [a-z] [а-яё0-9]
reg = /\d{2}[a-z]{2}$/i;
console.log(str.search(reg)); // индекс соответствия
console.log(reg.test(str));

partNumbers.forEach(function(el) {
    if(reg.test(el)) {
        result.push(el);
    }
});

console.log(result);