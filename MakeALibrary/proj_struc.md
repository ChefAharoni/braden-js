# Project Overview

This project contains a small library for working with a mock dataset of fast food nutrition information. The library provides helper functions to retrieve and manipulate data from the dataset.

## File Structure

- **helpers.js**: Contains the mock data (`DataTables`) and utility functions like `randomNumber` and `getColumn` to interact with the dataset.
- **lib.js**: Implements higher-level functions that use the helpers to perform specific tasks, such as finding the item with the highest calories or checking calorie guesses.

## Dataset: Fast Food Nutrition

The dataset is a mock table of fast food items with their calorie and fat content. Below is the data represented as a table:

| Name                      | Calories | Fat |
| ------------------------- | -------- | --- |
| Big Mac                   | 540      | 28  |
| Whopper                   | 660      | 40  |
| Chicken Nuggets (10 pcs)  | 470      | 28  |
| Fries (medium)            | 340      | 16  |
| Sundae                    | 280      | 12  |
| Chicken Sandwich          | 500      | 22  |
| Fish Sandwich             | 380      | 18  |
| Salad (Caesar)            | 350      | 25  |
| Apple Pie                 | 240      | 12  |
| Soft Drink (medium)       | 150      | 0   |
| Milkshake (medium)        | 600      | 20  |
| Taco Salad                | 550      | 35  |
| Chili Cheese Fries        | 600      | 40  |
| Mozzarella Sticks (4 pcs) | 300      | 20  |
| Onion Rings               | 410      | 25  |
| Breakfast Burrito         | 300      | 15  |
| Pancakes (3 pcs)          | 350      | 10  |
| Egg McMuffin              | 300      | 12  |
| Hash Browns               | 140      | 8   |
| Fruit Smoothie            | 200      | 2   |
| Bagel with Cream Cheese   | 450      | 20  |

## Usage

1. Use the functions in `helpers.js` to retrieve specific columns or generate random numbers.
2. Use the functions in `lib.js` to perform operations like:
   - Getting a random food item index.
   - Checking if a guessed calorie value matches the actual value.
   - Finding the food item with the highest calories.

## Example

Here’s an example of how to use the library:

```javascript
const { getIndex, getName, getItemWithHighestCalories } = require("./lib");

// Get a random food item
const randomIndex = getIndex();
const randomFood = getName(randomIndex);
console.log(`Random Food: ${randomFood}`);

// Find the food item with the highest calories
const highestCalorieItem = getItemWithHighestCalories();
console.log(`Highest Calorie Item: ${highestCalorieItem}`);
```
