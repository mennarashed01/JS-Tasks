//? task1 
console.log("%c TASK 1: ", "color: yellowgreen");

// Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(100000.00); // 100000
console.log(Math.round(99999.9)); // 100000
console.log(Math.ceil(99999.9)); // 100000
console.log(Math.floor(100000.9)); // 100000
console.log(Math.trunc(100000.55)); // 100000
console.log(Math.abs(-100000)); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(10 ** 5); // 100000
console.log(10 * 10 * 10 * 10 * 10); // 100000

//? task2
console.log("%c TASK 2: ", "color: yellowgreen");
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991\

//? task3
console.log("%c TASK 3: ", "color: yellowgreen");
console.log((Number.MAX_SAFE_INTEGER).toString().length); // 16

//? task4
console.log("%c TASK 4: ", "color: yellowgreen");
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

//? task5
console.log("%c TASK 5: ", "color: yellowgreen");
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

//? task6
console.log("%c TASK 6: ", "color: yellowgreen");
let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10

//? task7
console.log("%c TASK 7: ", "color: yellowgreen");
console.log(Math.round(Math.random()*4)); // 0 || 1 || 2 || 3 || 4


