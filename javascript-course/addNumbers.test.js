"use strict";

const addNumbers = require("./02-functions");

test("adds 5 + 3 to equal 8", () => {
  expect(addNumbers(5, 3)).toBe(8);
});