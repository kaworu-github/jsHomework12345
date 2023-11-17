/* 1 */
console.log("Завдання 1");
let random15 = Math.random() * 15;
let roundedRandomInt15 = Math.round(random15)
console.log(roundedRandomInt15);

/* 2 */
console.log("Завдання 2");
let random10 = Math.random() * 10;
let roundedRandomInt10 = Math.round(random10)
/* console.log(random10);
 */let stepenRandom = Math.pow(random10, 2)
console.log(stepenRandom);

console.log(" ");

/* 3 */
console.log("Завдання 3");

let randomKoren = Math.random() * 10;
let korenRandom = Math.sqrt(randomKoren)
console.log(randomKoren);
console.log(korenRandom);



console.log(" ");
/* 4 */
console.log("Завдання 4");

let randomUsl = Math.random() * 10;
let randomNormik = Math.round(randomUsl)

if (randomUsl > 5) {
    console.log(" +++ ");
} else {
    console.log(" --- ");
}

console.log(" ");

/* 5 */
console.log("Завдання 5");

for (let i = 0; i < 10; i++) {
       let random = Math.random() * 10;
       let roundRandom = Math.round(random)
       console.log(roundRandom);
}


console.log(" ");
/* 6 */
console.log("Завдання 6");

/* let randomPromp = prompt("Яке число");
let randomint = Math.random() * 10
let resault = Math.round(randomint);
let user = randomint * randomPromp;

for (let i = 0; i <= user; i++) {
    console.log("number");
} */

console.log(" ");


/* 11)) */
console.log("Завдання 1(2)");

function generatorRandomFloat() {
    let random15 = Math.random() * 15;
    let roundedRandomInt15 = Math.round(random15)
    console.log(roundedRandomInt15);
}
generatorRandomFloat()

console.log(" ");

/* 22)) */
console.log("Завдання 2 (2)");

function randomStepenFn() {
    let random10 = Math.random() * 10;
    let roundedRandomInt10 = Math.round(random10)
    /* console.log(random10);
    */let stepenRandom = Math.pow(random10, 2)
    console.log(stepenRandom);
}
randomStepenFn()

console.log(" ");

/* 33)) */
console.log("Завдання 3(2)");

function korenRandomeneratorFn() {
    let randomKoren = Math.random() * 10;
    let roundKoren = Math.round(randomKoren)
    let korenRandom = Math.sqrt(randomKoren)
    let roundKorenRound = Math.round(korenRandom)
    console.log(roundKoren);
    console.log(roundKorenRound);

}

korenRandomeneratorFn();



let a = 15;
let b = 12;
let c = 34;
let d = 42;

function multiName(num) {
    let multin = num * 4;
    console.log(multin);
}

multiName(a);
multiName(b);
multiName(c);
multiName(d);

console.log(" ");



/* 1 */
console.log("Завдання 5");

function multiNumbers(border) {
    let random = Math.random () * border
    console.log(random);
}

multiNumbers(10);
multiNumbers(50);
multiNumbers(100);

console.log(" ");


/* 2 */

console.log("Завдання 6");

const arr = []

function arrGenerator() {
    for (let i = 0; i < 10; i++) {
        let randomInt = Math.random() * 10
        let resaultRound = Math.round(randomInt)
        arr.push(randomInt)
    }
    console.log(arr);
}

arrGenerator(arr)

console.log(" ");


/* ДОМАШНЯ РОБОТА ЗАВДАННЯ 1 */

console.log("завдання 1");

function sumTwoNumb() {
    let a = 3;
    let b = 4
    let sum = a + b   
    console.log(sum);
}
sumTwoNumb()

console.log(" ");

/* 2 */

console.log("завдання 2");

function formulaCuba() {
    let a = 13;
    console.log("формула об'єму куба дорівнює : v = a^2 -> 13^2");
    let v = a ** 2;
    console.log(v);
}
formulaCuba()

console.log(" ");

/* 3 */

console.log("завдання 3");

function elseif() {
    let parnNumb = Math.random() * 10;
    let normikParnNumb = Math.round(parnNumb)
    if (normikParnNumb % 2 == 0) {
        console.log(normikParnNumb + " число парне");
    } else {
        console.log(normikParnNumb + " число не є парним");
    }if (normikParnNumb == 0) {
        console.log(normikParnNumb + " нуль)");
    }
}
elseif()

console.log(" ");


/* 4 */


console.log("завдання 4");

console.log(" ");


/* 5 */

console.log("завдання 5");

function logMessage() {
    console.log("message");
}
logMessage()

console.log(" ");

/* 6 */

console.log("завдання 6");

let string = "JavaScript"
let numbString = 0;

function numbStringFn() {
    for (let i = 0; i < string.length; i++) {
        numbString ++
    }
    console.log(numbString);
}
numbStringFn()

console.log(" ");

console.log("завдання 7");

function returnTenNumb() {
    let somthNumb = Math.random() * 10
    let normSomthNumb = Math.round(somthNumb)
    console.log(normSomthNumb);
}
returnTenNumb()

console.log(" ");

console.log("завдання 8");

let normString = "Hello"
let aroundString = "";

function aroundStringFn() {
    for (let i = normString.length -1; i >= 0; i--) {
        aroundString += normString[i]
    }
    console.log(aroundString);
}
aroundStringFn()

console.log(" ");

console.log("завдання 9");

const array = [1, 2, 3, 5, 6]
function midlAref() {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    let midle = sum / array.length
    console.log(midle);
}
midlAref()

console.log(" ");

console.log("завдання 10");


console.log("завдання 12");

function parniNumbers() {
    for (let i = 0; i <= 20; i+=2) {
        console.log(i);
        
    }
}
parniNumbers()

console.log(" ");

console.log("завдання 13");


function deleteLeter() {
    let golosString = "Hello";
    let newGolosString = ""
    for (let i = 0; i < golosString.length; i++) {
        if (golosString[i] == ["a", "e", "o", "u", "y"]) {
            newGolosString += golosString[i]
        }
            console.log(newGolosString);
    }
}

deleteLeter()

/* ~~~~~~~~~~-------- */
