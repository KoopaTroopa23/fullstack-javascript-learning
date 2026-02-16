// Type Conversion -  manually convert  (rare)
// Type Coercion - JS automaticaly converts

const inputBirthYear = '1991';
// console.log(Number(inputYear));      // built in Number function - returns string as a number
console.log(Number(inputBirthYear) + 18);

// console output - colors      
// purple = numbers
// white = strings


// type coercion
// 2 values with different types

console.log('I am ' + 23 + ' years old'); // string + number → string
console.log('23' - '10' - '3');           // minus forces numbers → 10
console.log('23' * '2');                  // multiply forces numbers → 46


// Example step by step
let n = '1' + 1;    // "11"  (string)
n = n - 1;          // 11 - 1 = 10 (number)
console.log(n);     // 10


// Examples
console.log(2 + 3 + 4 + '5');        // "95"
console.log('10' - '4' - '3' - 2 + '5'); // "15"