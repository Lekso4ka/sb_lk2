let person = {
    name: "Леонид",
    age: 12,
    say: function(text = "Hello") {
        console.log(`${this.name} сказал ${text}`);
    }
}

console.log(person.name);
person.say();
person.say("Hey!");

let rect = {
    width: 100,
    height: 30,
    getArea: function() {
        return this.width * this.height;
    },
    getPerimeter: function() {
        return this.width * 2 + this.height * 2;
    },
    getInfo: function() {
        console.log(`Прямоугольник с высотой ${this.height} и шириной ${this.width} имеет периметр ${this.getPerimeter()} и площадь ${this.getArea()}`);
    }
}

rect.getInfo();


// let cat = {
//     name: "Mirka",
//     age: 20,
//     type: "cat"
// }
// let dog = {
//     name: "Juchka",
//     age: 12,
//     type: "dog"
// }
// let parrot = {
//     name: "Kirya",
//     age: 2,
//     type: "bird"
// }
// let cat2 = {
//     name: "Vasya",
//     age: 0,
//     type: "cat"
// }

class Pet { // конструктор - заготовка будущего объекта
    constructor(n, a, t = "cat") {
        this._name = n;
        this._age = a;
        this.type = t;
    }
    get name() {
        return this._name;
    }
    set age(a) {
        this._age = a;
    }
    sound() {
        let txt = ""
        switch (this.type) {
            case "cat": txt = "meow"; break;
            case "dog": txt = "whoff"; break;
            case "bird": txt = "twit"; break;
            default: txt = "...";
        }
        return txt;
    }

}

// let pet1 = new Pet("Vasya", 2);
// let pet2 = new Pet("Juchka", 12, "dog");
// let pet3 = new Pet("Kirya", 2, "bird");

// console.log(pet1.sound());
// console.log(pet2.sound());
// console.log(pet3.sound());

let petTypes = ["dog", "cat", "bird"];
let petNames = ["Tulula","Tuluz","Tima","Sophy","Rick","Morty","Charly","Loki","Jorik","Joryan","Snezhhok","Chernysh","Milka","Chirika"];

let nursery = [];
let cnt = 100;

while(cnt--) {
    let name = petNames[getNumber(petNames.length)]; //[(0-length)];
    let age = getNumber(20);
    let type = petTypes[getNumber(petTypes.length)]; // любой тип ииз массива с типами
    nursery.push(new Pet(name, age, type));
}

// console.log(nursery);

let first = nursery[0]
console.log(first);
console.log(first.name);
first.name = "Cheburek";
first.age = 0;
console.log(first);
console.log(first.age);


// quest 4.3

class User {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(str) {
        let names = str.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
    }
}

let user = new User("Aleksander", "Petrov");

user.fullName = "tralala tralalalovich";
console.log(user.firstName);

// quest 4.4

class Delivery {
    constructor(n, p) {
        this.name = n;
        this.phone = p;
        this.validPhone = /^\+/.test(p);
    }
    isValid() {
        this.validPhone = /^\+/.test(this.phone);
    }
}

let name = "Pizza";
let phone = "81234567890";


let deliveryName = new Delivery(name, phone);
deliveryName.phone = "+1234567";
deliveryName.isValid();

console.log(deliveryName.validPhone);


/*
    let sign = "/", a = 2, b = 0;

    switch (sign) {
        case "+": console.log(a+b); break;
        case "-": console.log(a-b); break;
        ...
        case "/": 
            if (b !== 0) {
                console.log(a/b); 
            } else {
                ! =)
            }
        break;

    }
*/