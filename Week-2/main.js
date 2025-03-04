//? Task1
console.log("%cTask1: ", "color: red");
// Add Variables Here
let numberOne = 10, numberTwo = 20;

// Output
console.log(numberOne+ '' + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne+ '' + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof (`${numberOne}${numberTwo}`)); // Template Literals Way => String

console.log(numberOne + '\n' +numberTwo);
/*
    Normal Concatenate
    20
    10
*/

console.log(`${numberOne}
${numberTwo}`);
/*
    Template Literals Way
    20
    10
*/

//? Task2
console.log("%cTask2: ", "color: red");
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

//? Task3
console.log("%cTask3: ", "color: red");
console.log("`I'm In \n \\\\ \n Love \\\\ \"\"\" ''' \n ++ With ++ \n \\\"\"\"\\\"\"\" \n \"\"JavaScript\"\"``");

//? Task4 : Challenge
console.log("%cTask4:", "color: red");
let a = 21;
let b = 20;

console.log("_"+ `${a}_${b}` .repeat(4)+ "_"); // _21_2021_2021_2021_20_