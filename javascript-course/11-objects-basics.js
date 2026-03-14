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


const carOne = {                      // javascript object
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

console.log(carOne.checkAge());

//  Remember your test case - Once JS gets to first true then it will only print that UNLESS you have && 


const carTwo = {                        // javascript object
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

console.log(carTwo.checkAgeOwner());

// this.  is a keyword that refers to the object that is running the method.     keywords  this   MUST BE USED INSIDE METHOD
// return sends a value back from the function to whoever called it — and then the function stops running.


// test 1
const user = {
    firstName: "Kevin",        //  property : value
    lastName: "W",
    age: 45,
    isMember: true,

   getstatus: function () {
    return this.isMember ? "Full Member" : "Guest";             //  this is required,  means Get the name from THIS object. 
   }
};


// test 2 

const student = {
    firstName: "Jessica",
    lastName: "Daffy",
    birthYear: 1981,
    hasLicense: true,

    calcAge: function () {
        return 2026 - this.birthYear;    
    },
    getSummary: function () {
        return `${this.firstName} ${this.lastName} is ${this.calcAge()} years old and ${this.hasLicense ? "has" : "does not have" } a driver's license`;    
    }
}
console.log(student.getSummary());


//  test 3

const bankAccount = {
      owner: "Kevin",
      balance: 15000,
      
      deposit: function(amount) {
        this.balance += amount;     // this.balance = this.balance + amount;
        return this.balance;
      },
      withdraw: function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
           return "Withdrawal successful";
        } else {
            console.log("Insuffient Funds");
      }
    },  
      getSummaryOne: function () {
        return `${this.owner} has $${this.balance} in the account`;
      }
    };   // Semicolon only after the whole object ends
            
bankAccount.deposit(200);
bankAccount.withdraw(100);
console.log(bankAccount.getSummaryOne());




const userSix = {
    username: "Kevin",
    age: 45,
    isAdmin: true
};

          // Dot notation
      console.log(userSix.username);
     // Bracket notation
     console.log(userSix["age"]);
    
    if (userSix.isAdmin) {
    console.log("Admin acces granted");
    } else {
        console.log("Regular user");
 }































