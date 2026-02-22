// This file controls the behavior (what the page does)

// Select the button element from the HTML
const button = document.getElementById("btn");
// const = keyword (creates constant variable)
// button = variable name
// document = built-in object representing the entire webpage
// . = dot operator (access property/method)
// getElementById = method (finds an element by its id)
// "btn" = id value from HTML
// This line stores the button element in the variable "button"


// Select the paragraph element from the HTML
const message = document.getElementById("message");
// Stores the paragraph element in variable "message"


// Add a click event listener to the button
button.addEventListener("click", function () {
// button = the element we selected
// .addEventListener = method that listens for events
// "click" = event type (when user clicks)
// function () { } = function that runs when the click happens

    message.textContent = "Button was clicked!";
// message = paragraph element
// .textContent = property that changes the text inside the element
// "Button was clicked!" = new text being assigned

});