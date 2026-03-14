"use strict";

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// Array is a big container full of varaibles        (data structure) Arrays & Objects

const allfriends = ['Michael', 'Steven', 'Peter'];    //  literals
console.log(allfriends);

const years = new Array(1991, 1984, 2000, 2020);
console.log(years)


console.log(allfriends[0]);
console.log(allfriends[3]);

console.log(allfriends.length);
console.log(allfriends[allfriends.length - 1]);  // JS expects an expression


allfriends[2] = 'Jay';
console.log(allfriends);
console.log(allfriends[2]);


// arrays can hold different values,   arrays cannot be reassigned but are mutable,  can put other arrays inside arrays. 

const random = ['Kevin', 1980, 'September', 'true'];
const math = [2026 - 1980, 2026 - 1985, 2026 - 2008, 2026 - 2016];

const allTogether = [allfriends, years, random, math];                   // nested array
console.log(allTogether);






//  Practice with function

const calcAge = function (birthYear) {
    return 2026 - birthYear;
}
const year = [1980, 1985, 2000, 2016];

console.log(calcAge(years[0]));                            //  Use a loop to avoid this writing this 4 times
console.log(calcAge(years[1]));
console.log(calcAge(years[2]));
console.log(calcAge(years[3]));



// lecture 2 
// Basic Array Operations - Methods




const allfriendsOne = ['Michael', 'Steven', 'Peter']; 
allfriendsOne.push('Jay');                                       //  .push  function    (method)
console.log(allfriendsOne);


// Add Elements
allfriendsOne.unshift('John');
console.log(allfriendsOne);                               


// Remove Elements - last
allfriendsOne.pop();      
console.log(allfriendsOne);


// Remove Elements - First
allfriendsOne.shift();
console.log(allfriendsOne);



// test 1

const favoriteFoods = ['pizza', 'tacos', 'steak'];
console.log(favoriteFoods[0]);
console.log(favoriteFoods[2]);

// test 2

const cities = ['New York', 'London', 'Tokyo'];
cities.push('Paris');                      // to the end
cities.unshift('Toronto');                 //  to the begining
cities.pop();                           //  delete the end
console.log(cities);





//  test 3

const numbers = [10, 20, 30];
numbers.push(40);
numbers.unshift(5);
numbers.pop();
console.log(numbers);



// test 4

const animals = ['dog', 'cat', 'lion'];
animals.push('tiger');
animals.unshift('elephant');
animals.pop();

console.log(animals);
console.log(animals[0]);
console.log(animals.length);











































































