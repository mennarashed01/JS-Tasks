//? Task1
console.log("%c Task One: ", "color: yellow");
// Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400);  // 0

//? Task2
console.log("%c Task Two: ", "color: yellow");
let num = 3;

// Solution One
console.log( num + num); // 6

// Solution Two
console.log((num * num) - num ); // 6

// Solution Three
console.log(((num **num) / num) - num); // 6

// Solution Four
console.log(num + true + true + true); // 6

// Solution Five
console.log(true* num + num); // 6

// Solution Six
console.log((num /num ) + num + true + true); // 6


//? Task3
console.log("%c Task Three: ", "color: yellow");
let numb = "10";

// Solution One
console.log( +numb + +numb); // 20

// Solution Two
console.log(+numb * +numb / +numb + +numb); // 20

// Solution Three
console.log(+numb + true * +numb ); // 20

// Solution Four
console.log( numb-- + ++numb); // 20


//? Task4
console.log("%c Task Four: ", "color: yellow");
let points = 10;

// Write Your Code Here
points++;
points += true;
++points;
console.log(points); // 13

// Write Your Code Here
--points;
points--;
--points;
points--;
points -= true;
console.log(points); // 8;


