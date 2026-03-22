"use strict";

//  getting data from API, database, waiting for timer, loading a file
// works with all functions  -  Manages delay time from retreiving data. 

//  async - marks the function as asynchronous
// await - tells JavaScript to wait for that specific result
//  fetch() - gets data from a URL



// Timeset

//  Purposely Delays - you set timer

console.log("Start");

setTimeout(function () {
  console.log("This runs later");
}, 2000);

console.log("End");



// Async

async function sayHi() {
  return "Hi";
}

sayHi().then(function (message) {
  console.log(message);
});