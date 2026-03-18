"use strict";

// automate repetitive tasks with loops

console.log('Lifting weights repetition 1');


//  For loop

//  starts at #1;  interation of loop (below or equall to 10);  increases rep by 1
for (let rep = 1; rep < 10; rep++) {
// when this condition stays true then the loop continues
console.log(`Lifting weights repetition ${rep}`);
                                       // template literal to increase value + 1
}




// Loops with Arrays

const animals = ['dog', 'cat', 'lion', 2026 - 1980, true];   
const types = [];

for(let i = 0; i < animals.length; i++) {                    //      starts at 0 because arrays start at 0,  the array just goes up to 2 values BUT do not hardcode use animal.length,    counter variable up by 1 each time
    console.log(animals[i])         //  each element of the array

    types[i] = typeof animals[i];            // position i     looping the array.
// OR
    // types.push(typeof animals[i]);
}
console.log(types);



//   ******

const years = [1980, 1985, 2008, 2016];
const ages = [];                 // empty array to fill up ages

for (let i = 0; i < years.length; i++) {
    ages.push(2026 - years[i]);
}
console.log(ages);



// contiue and break       to exit loop and continue to next  // break the whole loop


console.log(' --- ONLY STRINGS ---- ');
for (let i = 0; i < animals.length; i++) {               
 if (typeof animals[i] !== 'string') continue;               // continue

    console.log(animals[i], typeof animals[i]);

}



console.log(' --- BREAK WITH NUMBER ---- ');
for (let i = 0; i < animals.length; i++) {               
 if (typeof animals[i] !== 'number') break;               //  break

    console.log(animals[i], typeof animals[i]);

}


// test 1

for (let i = 1; i < 6; i++) {
    console.log(i)
}
