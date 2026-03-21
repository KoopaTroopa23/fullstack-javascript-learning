// try → code you want to attempt
// catch → runs if there’s an error
// finally → runs no matter what
// throw → create your own error


function addThis(a, b) {
  try {
    return a + b;
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  } finally {
    console.log("This always runs");
  }
}

console.log(addThis(5, 7));




function addNumbers(num1, num2) {
  try {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("Inputs must be numbers");
    }

    return num1 + num2;
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  } finally {
    console.log("Done running addNumbers");
  }
}

console.log(addNumbers(5, 3));      // works
console.log(addNumbers(5, "hi"));   // triggers error