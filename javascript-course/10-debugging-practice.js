// GOAL: If age is 18 or more, allowed should become true.

const age = 18;
let allowed = true;

function checkAge() {
  // BUG: looks fine at a glance, but allowed doesn't change outside this block
  let allowed = false; // <-- bug is here
}

checkAge();
console.log("Allowed:", allowed);
