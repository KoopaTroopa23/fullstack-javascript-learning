// Boolean logic - The AND , OR & NOT operators

// truth table - AND
//  AND  TRUE   FALSE
//  true  true  false     B
//  false false false
     //   A
//  OR   TRUE FALSE
//  true true true         B
//  false true false

// Logical Operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);   // AND
console.log(hasDriversLicense || hasGoodVision);   // OR
console.log(!hasDriversLicense);  // reverses a value  (false becomes true)  etc. 

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(hasDriverLicense && hasGoodVision) {
//     console.log("Sarah can drive");
// } else {
//     console.log("Someone else should drive!");
// }
 

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah can drive");
} else {
    console.log("Someone else should drive!");
}


// Coding Challenge

// averages
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

// compare averages
if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy");
} else {
    console.log("Koalas win the trophy");
}








