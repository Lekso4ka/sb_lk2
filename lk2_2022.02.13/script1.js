let speed = Math.random();
// 0 < speed < 1

speed *= 100; // speed = speed * 100

// 0 < speed < 100 

// 0.0000000001
// 0.9999999999

// 0 <= speed <= 100
// Math.ceil() / Math.floor() / Math.round()
speed = Math.round(speed);

console.log(speed); 

// скорость от 0 до 30 ("Медленно")
// скорость от 31 до 70 ("Оптимально")
// 71+ ("Слишком быстро!")

if (speed <= 30) {
    console.log("So slow...");
} else if (speed > 30 && speed <= 70) {
    console.log("Norm");
} else {
    console.log("Too fast!");
}

let min = -100;
let max = 100;


// Alt + shift + стрелочка вниз
let a = Math.round(Math.random() * (max - min) + min);
let b = Math.round(Math.random() * (max - min) + min);
let c = Math.round(Math.random() * (max - min) + min);


console.log(a, b, c); // 80 80 90

if (a >= b && a >= c) {
    console.log(a);
} else if (b >= a && b >= c) {
    console.log(b);
} else {
    console.log(c);
}


