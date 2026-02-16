//  truthy and falsey values

// 5 falsy values:  0, '', undefined, null, NaN

console.log(Boolean(0));                // false
console.log(Boolean(undefined));         // false
console.log(Boolean('Kevin'));         // true
console.log(Boolean({}));             // true
console.log(Boolean(''));            // false empty string


const money = 0;
if(money) {                     // Js will try to convert to a Boolean = 0 which is false
    console.log("Don't spend it all");
} else { 
    console.log("You need a job");
}



let height;
if(height) {                 //  height is undefined, so it is false
    console.log("Your height is defined");
} else {
    console.log("height is undefined");
}

