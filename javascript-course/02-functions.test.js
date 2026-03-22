"use strict";

// Import 3 functions from 02-functions.js
// addNumbers -> adds 2 numbers
// multiplyThree -> multiplies 3 numbers
// checkLogin -> checks whether a user is logged in
const { addNumbers, multiplyThree, checkLogin } = require("./02-functions");

// Test #1
// This checks that addNumbers(5, 3) returns 8
test("adds 5 + 3 to equal 8", () => {
  expect(addNumbers(5, 3)).toBe(8);
});

// Test #2
// This checks that multiplyThree(2, 3, 4) returns 24
test("multiplies 2 * 3 * 4 to equal 24", () => {
  expect(multiplyThree(2, 3, 4)).toBe(24);
});



// Test #3
// This checks that checkLogin("admin", "1234") returns "Login Successful"
test('returns "Login Successful" for correct username and password', () => {
  expect(checkLogin("admin", "1234")).toBe("Login Successful");
});