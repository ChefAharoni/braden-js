const { randomNumber } = require("./helpers");

/**
 * Returns a random index from the "Name" column of the Fast Food Nutrition table.
 * @returns {number} A random valid index into the name list.
 */
function getIndex() {
  // Retrieve the array of all names from the "Name" column
  var nameList = getColumn("Fast Food Nutrition", "Name");
  // Generate a random integer between 0 and nameList.length - 1 (inclusive)
  var index = randomNumber(0, nameList.length - 1);

  // Return that randomly chosen index
  return index;
}

/**
 * Returns the food name at a given index.
 * @param {number} index - The position in the nameList to retrieve.
 * @returns {string} The name of the food item.
 */
function getName(index) {
  // Retrieve the array of all names again
  // "Fast Food Nutrition" is the name of the table
  // and "Name" is the column we want to access
  var nameList = getColumn("Fast Food Nutrition", "Name");
  // Access the element at the provided index
  var name = nameList[index];
  // Return that name
  return name;
}

/**
 * Checks if a guessed calorie value matches the actual calories at the given index.
 * @param {number} index - The position in the calories list.
 * @param {number} guess - The guessed calorie value.
 * @returns {boolean} True if the guess is exactly correct; otherwise false.
 */
function checkCalories(index, guess) {
  // Retrieve the array of all calorie values
  var allCalories = getColumn("Fast Food Nutrition", "Calories");
  // Compare strictly (===) to avoid type coercion
  if (guess === Number(allCalories[index])) {
    return true; // The guess matches exactly
  } else {
    return false; // The guess is incorrect
  }
}

/**
 * Counts how many times a given calorie value appears in the entire dataset.
 * @param {number} guess - The calorie value to count.
 * @returns {number} The number of occurrences of that calorie value.
 */
function checkAllCalories(guess) {
  // Retrieve the array of all calorie values
  var allCalories = getColumn("Fast Food Nutrition", "Calories");
  // Initialize our counter
  var count = 0;
  // Loop through every calorie entry
  for (var i = 0; i < allCalories.length; i++) {
    // If the current entry equals the guessed value, increment
    if (guess === allCalories[i]) {
      count = count + 1;
    }
  }
  // After checking every entry, return how many matched
  return count;
}

/**
 * Finds and returns the name of the food item with the highest calories.
 * @returns {string} The name corresponding to the maximum calorie value.
 */
function getItemWithHighestCalories() {
  // Retrieve both columns
  var nameList = getColumn("Fast Food Nutrition", "Name");
  var allCalories = getColumn("Fast Food Nutrition", "Calories");

  // Start by assuming the first item is the highest
  var maxCalories = allCalories[0];
  var item = nameList[0];

  // Loop from the second element onward
  for (var i = 1; i < allCalories.length; i++) {
    // If we find a strictly larger calorie count, update both variables
    if (allCalories[i] > maxCalories) {
      maxCalories = allCalories[i];
      item = nameList[i];
    }
  }
  // Return the name tied to the largest calorie count
  return item;
}

module.exports = {
  getIndex,
  getName,
  checkCalories,
  checkAllCalories,
  getItemWithHighestCalories,
};
