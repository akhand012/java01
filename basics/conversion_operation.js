//let score = "33abc"//
//let score = 33//
//let score = 33//
//let score = null//
//let score = undefined//
//let score = true//
let score = false

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)
//NaN means not a number
let isLoggedIn = 1
//boolean conversion 1 to true steps and 0 to false//
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//**************************operations*********************************//

let value = 3
let negValue = -value
console.log(negValue)

console.log(2+2)
console.log(2*2)
//same goes for - / ** % //

//SUMMATION OF STRING//
let str1 = "hello"
let str2 = "  world"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 3);
console.log(1 + 2 + "3");

console.log(+true);
console.log(+"");

let num1, num2, num3 

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
