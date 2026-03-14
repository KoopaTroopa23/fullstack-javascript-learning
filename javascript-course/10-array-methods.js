"use strict";

// Most important
// push()      → add to end
// pop()       → remove from end
// includes()  → check if item exists
// map()     → create new array from existing array
// filter()  → keep only items that match condition
// find()    → find first matching item



// unshift()   → add to beginning
// shift()     → remove from beginning
// indexOf()   → find position of item
// forEach() → loop through array


const fruits = ['apple', 'banana'];

fruits.push('orange');

console.log(fruits);



const numbers = [5, 10, 15, 20];

const result = numbers.find(num => num > 10);

console.log(result);