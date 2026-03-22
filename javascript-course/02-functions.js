"use strict";

//  return -   use inside function
// console.log - use outside function


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
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;  // template literal
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
function calcAge25(birthYear) {
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







// test 4             dot.notation

function checkPassword (password) {
    if (password.length > 0 ) {
        return ("Strong password");
    } else if (password.length < 0) {
        return ("Meduim Password");
    } else {
        return ("Weak password");
    }
 
}      
const resultTwo = checkPassword ("Hello123123");
console.log(resultTwo);




// Test 5

function greetUser (name) {
    return "Hello, " + name + "!";
}
const nameExample = greetUser("Kevin");
console.log(nameExample)


// test 6

function sayHello () {
    return "Hello!";
}
console.log(sayHello());        //  


// test 7

function addNumbers (num1, num2) {
    const total = num1 + num2;
    return total;
}
const totalSum = addNumbers(5, 3);
console.log(totalSum);




// test 8


function multiplyThree (numb1, numb2, numb3) {
    const totalSumOne = numb1 * numb2 * numb3;
    return totalSumOne;
}
const totalSumTwo = multiplyThree(1, 2, 3);
console.log(totalSumTwo);


//  test 9

function checkNumberOne (numb4) {
       if (numb4 > 0) {
         return "Positive Number";
        } else if (numb4 < 0) {
        return "Negative Numnber";
        } else {
       return "Zero";
        }
}
const numb4Total = checkNumberOne(-4);
console.log(numb4Total);




// test 10

function findLarger (numb5, numb6) {
    if (numb5 > numb6) {
        return "First number is larger";
    } else if (numb6 > numb5) {
        return "Second number is larger";
    } else {
        return "Numbers are equal";
    }
}
const sumIsTotal = findLarger (6, 7);
console.log(sumIsTotal);


// test 11

function checkDivisible (number, divisor) {
       if (number % divisor === 0) {
        return ("Divisible");
       } else {
        return ("Not divisible");
       }
       
}
const checkDivisEvent = checkDivisible(10, 2);
const checkDivisOdd = checkDivisible (7, 3);
console.log(checkDivisEvent);
console.log(checkDivisOdd);




// test 12

function checkUserName (username) {
       if (username === "admin") {
        return "Access Granted";
       } else {
        return "Access Denied";
       }
}
const checkyUser = checkUserName("admin");
console.log(checkyUser);



// test 13

function discount (price) {
      if (price >= 100) {
        return price - (price * 20);
      } else if (price >= 50) {
        return price (price * 10); 
      } else { 
        return price;
      }
}
const totalPrice = discount(120);
console.log(totalPrice);


// test 14

function checkLogin (username, password) {
    if (username === "admin" && password === "1234") {
        return "Login Successful";
    } else {
        return "Invalid credentials";
    }
}
const validLogin = checkLogin ("admin", "1234");
const notValidLogin = checkLogin ("blah", "4321");
console.log(validLogin);
console.log(notValidLogin);











// test #15

function studentGrade(grade) {

    if (grade >= 90) {
        return "A";
    } 
    else if (grade >= 80) {
        return "B";
    } 
    else if (grade >= 70) {
        return "C";
    } 
    else if (grade >= 60) {
        return "D";
    } 
    else {
        return "F";
    }

}
console.log(studentGrade(95));
console.log(studentGrade(82));
console.log(studentGrade(67));
console.log(studentGrade(45));



// test #16

function checkTemperatureTwo (temp) {
        if (temp >= 80) {
            return "Hot";
        } else if (temp >= 60) {
            return "Warm";
        } else {
            return "Cold";
        }
}
console.log(checkTemperatureTwo(85));















//   expression function test

//  test 1


const addOne = function (a, b) {
       return a + b;
}
const adding = addOne (4, 6);
console.log(adding);


// test 2

const greetMe = function (name) {
    return "Hello " + name;
}
const greeting = greetMe ("Kevin");
console.log(greeting);


// test 4

const birthYearOne = function (currentYear, birthYear) {
    return currentYear - birthYear;
}
const birthYearTwo = birthYearOne (2026, 1980);
console.log(birthYearTwo);



// test 5


const checkNumber = function (num) {
    if (num > 0) {
        return "Postive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log(checkNumber(5));
console.log(checkNumber(-3));
console.log(checkNumber(0));








// Arrow function test


// test 1

const multiplyOne = (a, b) => a * b;               //  2 parameters , then use brackets
const multiplythis = multiplyOne (3, 4);
console.log(multiplythis);

// test 2 

const squarey = num => num * num;                  // just 1 parameter then dont use brackets
const squareOne = squarey(5);
console.log(squareOne);



// test 3

const isPositive = num => num > 0;
console.log(isPositive(-3));
console.log(isPositive(4));



// test 4 arrow function


const checkTemperature = temp => {
    if (temp >= 75) {
        return "Warm";
    } else {
        return "Cool";
    }
};

const result1 = checkTemperature(75);
const result2 = checkTemperature(60);

console.log(result1);
console.log(result2);
    


//  test 5

const checkTemperatureOne = (temp) => {

  if (temp < 32) {
    return "Freezing";
  } 
  else if (temp <= 70) {
    return "Cold";
  } 
  else if (temp <= 85) {
    return "Warm";
  } 
  else {
    return "Hot";
  }

};
console.log(checkTemperatureOne(20));
console.log(checkTemperatureOne(50));
console.log(checkTemperatureOne(75));
console.log(checkTemperatureOne(90));




//  test 6

const oddEven = (num) => num % 2 === 0 ? "Even" : "Odd";  // Ternary Statements work good with arrow functions
console.log(oddEven(2));
console.log(oddEven(3));




// test 7

const ageCategory = (age) =>
  age <= 13 ? "Age 13 and under require adult" :
  age <= 18 ? "Age 14–18 require no adult if movie is PG-13" :
  age >= 65 ? "Senior Citizen discount" :
  "Age 18+ do not require any adult for any movie";

console.log(ageCategory(7));
console.log(ageCategory(15));
console.log(ageCategory(22));
console.log(ageCategory(70));



// test 8

const checkLoginStatus = (login) =>
    login ? "You are logged in" : "You are not logged in";
console.log(checkLoginStatus(true));
console.log(checkLoginStatus(false));



// test 9

const freeShipping = (order) => 
    order >= 50 ? "Free Shipping" :
    order >= 30 ? "1/2 Shipping Cost" :
    "No shipping discount";
console.log(freeShipping(55));
console.log(freeShipping(49));
console.log(freeShipping(29));




// test 10 

const membershipLevel = (points) => 
    points >= 1000 ? "Platinum Member" :
    points >= 500 ? "Gold Member" :
    points >= 100 ? "Silver Member" :
    "Bronze Member";
console.log(membershipLevel(999));
console.log(membershipLevel(499));
console.log(membershipLevel(100));




module.exports = {
  addNumbers,
  multiplyThree,
  checkLogin
};




