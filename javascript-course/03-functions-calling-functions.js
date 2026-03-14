"use strict";


function cutFruitPieces (fruit) {          // machine that cuts fruit into pieces
    return fruit * 4;
}



function fruitProcessor (apples, oranges) {
    const applePieces = cutFruitPieces(apples);        //  calling function cutFruitPieces
    const orangePieces = cutFruitPieces(oranges);


    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;  // template literal 
    return juice;
}
       
console.log(fruitProcessor(2, 3));








const calcAge = function(birthYear) {
    return 2026 - birthYear;
}


const yearsRetirement = (birthYear, firstName) => { 
// keyword,  variable name = parameter, arrow function { }    
    const age = calcAge(birthYear) ;
    const retirement = 65 - age;

    return `${firstName} will retire in ${retirement} years`; 
}

console.log(yearsRetirement(1980, "Kevin"));
console.log(yearsRetirement(2016, "Addie"));




//  Function - can receive input data, transform data and output data. 






//  Learning Program Flow

const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
  return (scoreOne + scoreTwo + scoreThree) / 3;
};




const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } 
  else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } 
  else {
    console.log("No team wins...");
  }
}




checkWinner(avgDolphins, avgKoalas);





// calcAverage() → gets averages
//         ↓
// store results in variables
//         ↓
// checkWinner() → compares them
//         ↓
// prints winner