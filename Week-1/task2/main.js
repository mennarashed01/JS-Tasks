
//? task 2
document.write("<h1>Elzero</h1>");

document.querySelector('h1').style.color = "blue";
document.querySelector('h1').style.fontSize = "80px";
document.querySelector('h1').style.fontWeight = "bold";
document.querySelector('h1').style.textAlign = "center";
document.querySelector('h1').style.fontFamily = "Arial";

//? task3
console.log('%cTask 3',"color: yellow");
console.log("%c ELzero %c Web %c School", "color: red ; font-size: 20px", "color: green; fontWeight: bold ; font-size: 20px", "color: white; background-color: blue ; font-size: 20px");

//? task4
console.log('%cTask 4',"color: yellow")
let ms1 = 'Message One';
let ms2 = 'Message Two';

console.group('Group 1')
console.log(ms1 );
console.log(ms2 );
console.group('Child Group');
console.log(ms1 );
console.log(ms2);
console.group("Grand Child Group");
console.log(ms1 );
console.log(ms2);
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log(ms1 );
console.log(ms2 );
console.groupEnd();

//? task5
console.log('%cTask 5', "color: yellow");
let names = ["Elzero", "Ahmed", "Sameh", "Gamal", "aya"]
console.table(names)

//? task6


// first solution: comment code
// console.log("Iam In Console");
// document.write("Iam In Page");

//second solution: don't export js file in the document
