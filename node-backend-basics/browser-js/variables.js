// variables.js
// Learning JavaScript fundamentals for Node.js backend development
// This file is meant to be run in the BROWSER using Live Server,
// not with Node.js, because it uses alert().

// --------------------------------------------------
// IMPORTANT NOTE ABOUT OUTPUT
// --------------------------------------------------
// console.log(...) output:
// → shows in the Browser DevTools Console (Right-click → Inspect → Console)
//
// alert(...):
// → shows as a popup alert box in the browser window
// --------------------------------------------------


// console.log is a function that prints messages for debugging
// The text inside quotes is called a STRING
console.log("JS BASICS FILE IS RUNNING");


// --------------------------------------------------
// VARIABLES (const)
// --------------------------------------------------

// const = constant variable
// means the variable name cannot be reassigned later

// name is a variable
// "Kevin" is a string (text)
const name = "Kevin";

// age is a variable
// 35 is a number (no quotes = number)
const age = 35;

// isDeveloper is a variable
// true is a boolean (true / false)
const isDeveloper = true;


// --------------------------------------------------
// PRINTING VARIABLES
// --------------------------------------------------

// This prints the VALUE stored in the variable name
console.log(name);

// Prints the number 35
console.log(age);

// Prints true
console.log(isDeveloper);


// --------------------------------------------------
// NUMBERS vs STRINGS
// --------------------------------------------------

// + between numbers = math addition
console.log(2 + 3); // 5

// + between strings = string concatenation (joining text)
console.log("2" + "3"); // "23"

// JavaScript sees a string first, so everything becomes text
console.log("23" + 35); // "2335"


// --------------------------------------------------
// let VARIABLES
// --------------------------------------------------

// let allows reassignment (changing value later)
// firstNam is a variable name (note: spelling matters)
let firstNam = "Addie";

// Prints "Addie"
console.log(firstNam);


// --------------------------------------------------
// ALERTS (BROWSER ONLY)
// --------------------------------------------------
// alert() creates a popup message in the browser
// alert DOES NOT work in Node.js


// js is a variable holding a string
let js = 'amazing';

// === is STRICT EQUALITY
// It checks BOTH value AND type
if (js === 'amazing') {
    // This runs ONLY if the condition is true
    alert("JavaScript is FUN!");
}


// --------------------------------------------------
// CALCULATIONS
// --------------------------------------------------

// calc stores the RESULT of math operations
// Order is left to right because all are + and -
let calc = 48 + 8 + 23 - 10; // result = 69

// Compare calc (number) to 69 (number)
if (calc === 69) {
    alert("This equals 69.");
}


// ----------------------------------
