const age = 18;
if(age === 18) console.log("You just became an adult");
   // if only 1 line of code, then you dont need {}

// === strict operator  == loose operator - type coersion

const ageOfPerson = 18;
if(ageOfPerson == 19) console.log("person is 18 , age is 19 ");

// Getting values

const favNumber = Number(prompt("What is your favorite number? "));
alert(` Your favorite number is ${favNumber}` );
// prompt() always returns a string
// Number() converts the string to a number


if (favNumber === 23) { // if you use === like you should then this will be false because your are comparing a string/number so you have to put Number(prompt)
   console.log("Cool! 23 is an amazing number");
} else if(favNumber === 7) {
   console.log("7 is also a cool number");
} else if (favNumber === 9) {
   console.log("9 is also a cool number");
} else {
   console.log("Number is not 23 or 7 or 9");
}   

// different operator

if (favNumber !== 23) console.log("Why not 23?");  //  != loose version !== strict


//  !==  not equal to

      
   // Cannoit run with node because prompt and alert is only for browsers, it will give you an error if you try to run it with node.
