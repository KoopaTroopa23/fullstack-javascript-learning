"use strict";

function checkEven (num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd"
    } 
}
console.log(checkEven(4))

const getLastItem = [10, 20, 30];
console.log(getLastItem[2]);

const couuntItems = ["apple", "bananas", "orange"];
console.log(couuntItems.length);


const checkFood = ["pizza", "tacos", "steak"];
console.log(checkFood.includes("pizza"));

function getBiggerNumber (a, b) {
    if (a > b) {
    return "a is the bigger number";
    } else {
    return "b is the bigger number";
    }
}
console.log(getBiggerNumber(30, 29));