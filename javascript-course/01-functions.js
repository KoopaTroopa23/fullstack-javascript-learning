"strict";


// FUNCTION DECLARATION
// a piece of code that can be reuseable 
// not all functions return something  ---  a Function that continueously goes. 
// not all functions have parameters
// in order for you to have arguements, you NEED parameters.




// Type	Example
// Function Declaration	function calc() {}
// Function Expression	const calc = function() {}
// Anonymous Function	function() {} (no name)
// Arrow Function	const calc = () => {}

function logger () {
    console.log("My name is Kevin");                                           //  {} = function buddy                                       
}

 // invokes / calling / running  the function
logger();                                                         




                         // parameters = apples and oranges
function fruitProcessor (apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;  // ternary 
    return juice;
}
                        
const appleJuice = fruitProcessor(5, 0);
//       inputs for the parameters this is now called arguments   (5 apples, 0 oranages)
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



const num = Number('23');
console.log(num);
// Keep your code dry - (Don't repeat yourself)



// Part 2 - FUNCTION DECLARTION -  a function that returns something - Hoisting (can call function before it is declared) - 





function calcAge(birthYear) {
    const age = 2026 - birthYear;
    return age;
}
const age1 = calcAge(1980);
console.log(age1);


///  Easier way
function calcAge(birthYear) {
    return 2026 - birthYear;
}





//  FUNCTION EXPRESSION  - anonoylmous function  - Storing a function in a variable - 
// function does not have name

const calcAge2 = function (birthYear) {
    return 2026 - birthYear;
}

const age2 = calcAge2(1980);
console.log(age1, age2);


// ARROW FUNCTIONS =>  a shorter syntax for writing function expressions - does not get its own this keyword - cannot be used as constructor - does not have the arguments object

 const calcAge3 = birthYear => 2026 - birthYear;
 const age3 = calcAge(1980);
 console.log(age3);

 


const yearsRetirement = birthYear => { 
// keyword,  variable name = parameter, arrow function { }    
    const age4 = 2026 - birthYear;
    const retirement = 65 - age4;
    return retirement;
}
console.log(yearsRetirement(1980));


// multiple variables


const yearsRetirementMulti = (birthYear, firstName) => { 
// keyword,  variable name = parameter, arrow function { }    
    const age5 = 2026 - birthYear;
    const retirementMulti = 65 - age5;
    return retirementMulti;
    return `${firstName} retires in ${retirementMulti} years`;
}
console.log(yearsRetirementMulti(2008, "Chloe"));
console.log(yearsRetirementMulti(2016, "Addie"));







const yearsRetirementEx = birthYear => {
// const = keyword (creates constant variable)
// yearsRetirement = variable name (stores the function)
// = = assignment operator
// birthYear = parameter (input to the function)
// => = arrow function syntax
// { } = function body (code runs inside here)

    const age7 = 2026 - birthYear;
// const = keyword
// age4 = variable name
// = = assignment operator
// 2026 = number literal
// - = subtraction operator
// birthYear = parameter value used in calculation

    const retirementEx = 65 - age7;
// const = keyword
// retirement = variable name
// = = assignment operator
// 65 = number literal
// - = subtraction operator
// age4 = variable used in calculation

    return retirementEx;
// return = keyword (sends value back)
// retirement = value being returned

}
// } = end of function

console.log(yearsRetirementEx(1980));
// console = built-in object
// . = dot operator (access method)
// log = method (prints to console)
// yearsRetirement = function name
// (1980) = argument (value passed into birthYear)


//  Arrow function Test



const caclTotal = (price, taxRate) => {
    const total = price + (price * taxRate);
    return total; 
};
const totalAmount = caclTotal (100, 0.07);
console.log(totalAmount);


// Test 2 Function Expression

const checkAccess = function (age, isMember) {
    if (age >= 18 && isMember) {
       return "Access Granted"; 
} else {
    return "Access Denied";
     }
};
const result = checkAccess (20, true);
console.log (result);
