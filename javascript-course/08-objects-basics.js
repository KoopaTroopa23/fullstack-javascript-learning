// OBJECTS BASICS
// An object groups related data together

// A car described using separate variables (OLD way)
const carBrand = "Toyota";
const carModel = "Camry";
const carYear = 2020;
const carColor = "Blue";

console.log(carBrand, carModel, carYear, carColor);


// --------------------------------------------------
// OBJECT (BETTER way)
// Everything about the car stored in ONE structure
// --------------------------------------------------

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue",
    mileage: 45000
};

// Access values (READ data)
console.log(car.brand);
console.log(car.model);
console.log(car.year);


// Dot notation (most common)
console.log("Car:", car.brand, car.model);

// Bracket notation (used when dynamic)
console.log(car["color"]);


// --------------------------------------------------
// CHANGING values
// --------------------------------------------------

car.color = "Red";          // modify existing value
car.mileage = 47000;

console.log("Updated color:", car.color);


// --------------------------------------------------
// ADDING new properties
// --------------------------------------------------

car.owner = "Kevin";
car.isRegistered = true;

console.log(car);


// --------------------------------------------------
// USING the object in logic
// --------------------------------------------------

if (car.year >= 2018) {
    console.log("Modern car");
} else {
    console.log("Older car");
}


// --------------------------------------------------
// SIMPLE METHOD (function inside object)
// --------------------------------------------------

car.describe = function () {
    return `${this.brand} ${this.model} (${this.year})`;
};

console.log(car.describe());



// Final thoughts


const car = {                      // javascript object
    brand: "Toyota",
    year: 2020,

    checkAge: function () {        // method (function inside object)
        if (this.year >= 2018) {   // conditional statement
            return "Modern car";
        } else {
            return "Old car";
        }
    }
};

console.log(car.checkAge());

//  Remember your test case - Once JS gets to first true then it will only print that UNLESS you have && 


const car = {                        // javascript object
    brand: "Toyota",
    year: 2020,
    model: "Corolla Cross",
    owner: "Kevin",
    price: 20000,   // numbers never use $


checkAgeOwner: function () {                                          // method (function inside object)
    if (this.year >= 2018 && this.owner === "Kevin") {               // conditional statement with logical operators to check both
        return "Modern car owned by Kevin";
    } else if (this.year >= 2018) {
        return "Modern car";
    } else {
        return "Old car";
    }
}
};

// this.  is a keyword that refers to the object that is running the method.
// return sends a value back from the function to whoever called it — and then the function stops running.

