let x = 0;
// вывести x, посчитав  до 10
// console.log("while");
while (x < 10) {
    x++;
    // console.log(x);
}

// console.log("for");
x = 0;
for (; x < 10;) {
    // console.log(x);
    x++;
}

// console.log("for extends");
// for (выражение 1; условие; выражение 2)


//
x = 5;
for (x = 0; x++ < 10;) {
    // x += 1
    // console.log(x);
}

for (x = 0; ++x < 10;) { // x = 1
    // console.log(x);
}

// console.log("End", x);


let word1 = "Радар";
let word2 = "Помидор";

let word1Return = "";
for (let i = word1.length - 1; 
     i >= 0; 
     i--) {
        word1Return += word1[i];
}

console.log(word1.toLowerCase() === word1Return.toLowerCase());

/*
    Дано несколько слов lemon menlo
*/
console.log(word2);
let isPalindrom = true;
for (let i = 0; i < Math.ceil(word2.length / 2); i++) {
    // сравнить первый и последний символ
    let start = word2[i];

    // i = 0
    // end = word2[length - 1 - 0] (last char)
    
    // i = 1
    // end = word2[length - 1 - 1] (second last char)
    
    // i = 2
    // end = word2[length - 3] (third last char)

    let end = word2[word2.length - 1 - i];
    console.log(start, end);
    if (start.toLowerCase() !== end.toLowerCase()) {
        isPalindrom = false;
        break;
    }
}

console.log(isPalindrom);

// А роза упала на лапу Азора

