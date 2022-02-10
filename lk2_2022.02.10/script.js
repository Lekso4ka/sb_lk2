/*
	Дано число 111111111111111 - это мс
	Вывести адекватное время, понятное человеку
	... г./лет ... д. ... ч. ... мин. ... сек.
*/

let birthday = new Date(2022,1,27); // 27 марта!!!
let now = new Date(); // сейчас

console.log(birthday);
console.log(now);

/*
	["январь", "февраль"]
*/

Math.abs(-2) // => 2 (число по модулю)

let time = birthday - now; // number
console.log(time);
let ms, s, m, h, d, y;

s = Math.floor(time / 1000);
ms = time % 1000; 
console.log(s, ms);

m = Math.floor(s / 60); // целое число минут
s = s - m * 60;  // 160сек = 2 мин и 40 = 160 - 2 * 60
console.log(m, s);

h = Math.floor(m / 60);
m = m - h * 60;
console.log(h, m);

d = Math.floor(h / 24);
h = h - d * 24;

y = Math.floor(d / 365);
d = d - y * 365;

/*
	Math.round(); // округление 1.2 => 1   2.75 => 3
	Math.floor(); // округление	1.2 => 1   2.75 => 2
	Math.ceil();  // округление 1.2 => 2   2.75 => 3
*/

let text = "Время " + time + " - это " + y + " лет "+ d + " д. " + h + " ч. " + m + " мин. " + s + " сек. " + ms + " мсек.";

text = `Время ${time} - это ${y} лет ${d} д. ${h} ч. ${m} мин. ${s} сек. ${ms * 5 - 90} мсек.`;

/*
	''
	""
	`` - ап остров
		 ё - кавычки
		 кайфовые
*/

/* Alt + z - не работает если за компьютером обитает ГЕЙМЕР! Steam */

console.log(text);


// Как написать строку text в обратном порядке????

// while(alive)
// 	вдох
// 	выдох

let number = 0;
while (number < 5) { // true || false
	console.log("little");
	number = number + 1; // 3
	// number += 1
	// number++
	console.log(number);
}
console.log("big");

console.log(text[0]); // первый символ в строке
console.log(text[100]); // первый символ в строке

console.log(text.length); // длина строки - сколько всего символов
console.log(text[text.length - 1]);

let char = text.length - 1;
let newText = "";

while (char >= 0) {
	// console.log(text[char]);
	newText += text[char];
	char--;
}
console.log(newText.toUpperCase());
console.log("We are happy!!!!");


/*

TODO: прочитать как работает консструкция if/else

Вывести правильно сстроку "На ветке сидело n ворон", где n - любое число от 0 до 1000;

Проверить окончания сущесствительного и глагола при числах от 0 до 30

1 ворона
2 вороны
10 ворон

*/