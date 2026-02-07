// Type Conversion -  manually convert  (rare)
// Type Coercion - JS automaticaly converts

const inputBirthYear = '1991';
// console.log(Number(inputYear));      // built in Number function - returns string as a number
console.log(Number(inputYear) + 18);

// console output - colors      
// purple = numbers
// white = strings


// type coercion
// 2 values with different types

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - '3');
console.log('23' * '2');


let n = '1' + 1;    // string 11 
n = n - 1;          // 11 - 1
console.log(n);     // 10 

//  2+3+4+'5'  = 95                           //  NOTE:   for +  it is different then other operators
/// '10' - '4' - '3' -2 + '5' = 