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

// Test 2

const userName = "Kevin";
const password = "1234";

if (userName === "Kevin" && password === "123") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}


// test 3

const ageFour = 17;
const hasID = true;

if (ageFour > 17 && hasID === true) {
    console.log("You may enter the gym");
} else if (ageFour < 18) {
     console.log("You are too young");    
} else  {
    console.log("You must bring an ID");
}


// test 4

const accessAge = 16;
const hasParentPermission = true;

if (accessAge >= 18) {
    console.log("You can watch the move");
} else if (accessAge >= 13 && hasParentPermission === true) {
    console.log("You can watch with parental permission");
} else {
    console.log("You are not allow to watch this movie");
}


// test 5 - nested

const accountBalance = 500;
const withdrawAmount = 200;
const isAccountActive= true;

if (isAccountActive) {
    if (withdrawAmount <= accountBalance) {
        console.log("Withdrawal approved");
    } else { 
        console.log("Insufficient funds");      
    } 
} else {
    console.log ("Account is not active");
}






// test 6

const hasResume = true;
const yearsExperience = 3;
const hasDegree = false;

if (hasResume) {
    if (yearsExperience >= 5) {
        console.log("Senior Position eligible");
    } else if (hasDegree === true) {
        console.log("Junior position eligible");
    } else {
        console.log("Not qualified");
    }
  } else {
    console.log("Application Incompleted");
  }























