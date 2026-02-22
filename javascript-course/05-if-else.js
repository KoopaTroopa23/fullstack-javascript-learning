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

if(ageThree >= 18) {
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



//  House

const twoStory = true;
const bathRoom = 2;
const bedRoom = 3;

if (twoStory && bathRoom === 2 && bedRoom === 3) {
   console.log("This is a 2 story house with 2 bathrooms and 2 bedrooms");
} else {
    console.log("Does does not meet requirements");
}
 


// test 1

const userLoggedIn = true;
const userAge = 18;
const isAllowed = true;

if (userLoggedIn && userAge >= 18 && !isAllowed) {
    console.log("You are logged in, age 18 and not banned")
} else {
    console.log("You dont not match the criteria");
}
