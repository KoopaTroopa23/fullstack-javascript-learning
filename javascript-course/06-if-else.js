const age = 19;
const isOldEnough = age >= 18;

if(isOldEnough) {
    console.log('You can start driving');    
} 

// condition evaluated  then if true, it is executed

const ageTwo = 22;
const isAgeEnough = ageTwo >= 21;

if(isAgeEnough) {
    console.log('You are old enough');
}


// if / else control structure

const ageThree = 15;

if(age >= 18) {
    console.log('You can start driving');       // if true
} else {
    const yearsLeft = 18 - ageThree;
    console.log(`You are too young, wait another ${yearsLeft} years`)   //  if false
}


const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);   // 20



