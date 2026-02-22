// Expression → gives a value
// Statement  → runs instructions


// expression = value
// 3 + 4
// 1991
// true false  !false


// statements  - does not produce value
if (23 > 10) {
    const str = "23 is bigger";
}


//  The Conditional (Ternary)   operator            like if / else statement but 1 line
// ? = then
// : = else

const age = 23;

// ternary version (returns a value)
const drink = age >= 18 ? "coffee" : "water";

console.log(drink);


// same logic using if / else
let drink2;

if (age >= 18) {
    drink2 = "coffee";
} else {
    drink2 = "water";
}

console.log(drink2);


// Template literal interpolation with Ternary Expression

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);


// Test 1  
const memberAge = 16;
const restrictAge = memberAge >= 18 ? "Full Access" : "Limited Access";
console.log(`Access level: ${restrictAge}`);

// Test 2

const ageOne = 22;
const isAllowed = true;
const access = ageOne >= 18 && !isAllowed ? "Premium Access" : "Access Denied";
console.log(`You have: ${access}`);

