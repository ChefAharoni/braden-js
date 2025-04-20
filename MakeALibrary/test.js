const {
  getIndex,
  getName,
  checkCalories,
  checkAllCalories,
  getItemWithHighestCalories,
} = require("./lib.js");

const { randomNumber, getColumn } = require("./helpers.js");

// Inject helper functions into the global scope for lib.js to use
global.randomNumber = randomNumber;
global.getColumn = getColumn;


console.log("Random Index:", getIndex());
console.log("Name at Index 2:", getName(2));
console.log("Check Calories (Index 1, Guess 300):", checkCalories(1, 300));
console.log("Count of 300 Calories:", checkAllCalories(300));
console.log("Item with Highest Calories:", getItemWithHighestCalories());
