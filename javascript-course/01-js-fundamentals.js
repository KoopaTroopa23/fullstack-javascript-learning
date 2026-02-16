/***********************************************************************
 BASIC JAVASCRIPT OPERATORS REFERENCE (BEGINNER NOTES)
 This file explains WHAT each line does and WHY it exists.
***********************************************************************/

/*
===========================================================
SECTION 1) MATH OPERATORS
===========================================================
JavaScript can do math like a calculator.
*/

// Current year minus birth year = age
const ageKevin = 2026 - 1980;   // 46
const ageAddie = 2026 - 2016;   // 10

// console.log(...) prints values to the console/terminal
console.log(ageKevin, ageAddie);
// Output: 46 10


/*
===========================================================
SECTION 2) STRINGS + CONCATENATION
===========================================================
Strings = text inside quotes: '...' or "..."
Concatenation = joining strings together with +
*/

// Basic string variables
const firstName = 'Kevin';
const lastName = 'Wingfield';

/*
⚠️ IMPORTANT:
job must be a string. If you write: const job = developer;
JavaScript thinks "developer" is a variable name, NOT text.
So you need quotes:
*/
const job = 'developer';

// Numbers can be stored in variables too
const birthYear = 1980;
const year = 2037;

/*
Concatenation with +
- 'I am '  is text
- firstName is a variable holding text
- ' ' adds a space between first and last name
*/
const kevin =
  'I am ' + firstName + ' ' + lastName + ', I was born in ' + birthYear + '.';

console.log(kevin);
// Example output: I am Kevin Wingfield, I was born in 1980.


/*
===========================================================
SECTION 3) TEMPLATE STRINGS (BACKTICKS)
===========================================================
Template strings use backticks: ` ... `
They let you insert variables easily using ${...}
*/

// This calculates age again using variables
const kevinNew = `I am ${firstName} ${lastName}, a ${year - birthYear} year old ${job}!`;
console.log(kevinNew);
// Example output: I am Kevin Wingfield, a 57 year old developer!

/*
MULTI-LINE STRINGS
Before (older style): use \n\ to create new lines inside a normal string.
*/
console.log('String with \n\
multiple line'); // Before (uses \n\)

/*
After (template string): you can just press Enter inside backticks.
*/
console.log(`String multiple line
Line 2
Line 3`);


/*
===========================================================
SECTION 4) BASIC VARIABLE MATH
===========================================================
*/

// let = value can change later
let x = 10 + 5;   // 15
console.log(x);


/*
===========================================================
SECTION 5) ASSIGNMENT OPERATORS
===========================================================
These MODIFY an existing variable.
*/

let y = 10 + 5;   // y starts as 15

y += 10;  // same as: y = y + 10  -> 25
y *= 4;   // same as: y = y * 4   -> 100
y++;      // same as: y = y + 1   -> 101
y--;      // same as: y = y - 1   -> 100

console.log(y);


/*
===========================================================
SECTION 6) COMPARISON OPERATORS
===========================================================
These return BOOLEAN values: true or false
*/

console.log(ageKevin > ageAddie);
// true because 46 > 10

console.log(ageKevin >= 18);
// true because 46 >= 18

/*
⚠️ NOTE:
== compares values with type coercion (can be confusing sometimes)
=== compares values AND types (recommended most of the time)
*/
const isFullAge = ageKevin === 18; // false because 46 is not 18
console.log(isFullAge);


/*
===========================================================
SECTION 7) LOGICAL COMPARISON EXAMPLE
===========================================================
*/

const now = 2026;

// Compare two calculations (each side produces a number)
console.log(now - 1980 > now - 2025);
// true because (46 > 1)


/*
===========================================================
SECTION 8) CHAINED ASSIGNMENT + ORDER OF OPERATIONS
===========================================================
*/

// Declare variables without values yet
let m, n;

/*
This runs RIGHT-to-LEFT for assignment:
1) (25 - 10 - 5) is calculated first -> 10
2) n = 10
3) m = n (which is 10)
*/
m = n = 25 - 10 - 5;

console.log(m, n);
// Output: 10 10


/*
===========================================================
SECTION 9) GROUPING WITH PARENTHESES
===========================================================
Parentheses () force what happens first.
*/

// Average = (sum of ages) / 2
const averageAge = (ageKevin + ageAddie) / 2;
console.log(ageKevin, ageAddie, averageAge);
// Output: 46 10 28


/***********************************************************************
 KEY CONCEPTS TO REMEMBER

 const  → value never changes (use this by default)
 let    → value can change later

 +      → add numbers OR join strings (concatenate)
 - * /  → math operators
 ===    → best “equals” comparison (value + type)
 > >=   → comparisons return true/false

 console.log(...) → prints output to terminal/console

 true / false → BOOLEAN values
***********************************************************************/
