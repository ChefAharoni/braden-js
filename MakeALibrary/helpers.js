// ─────────────────────────────────────────────────────────────────────────────
// MOCK DATA STORE
// In a real app, you’d load this from a file or database. Here we hard‑code
// a small “Fast Food Nutrition” table for demonstration.
// ─────────────────────────────────────────────────────────────────────────────
const DataTables = {
  "Fast Food Nutrition": [
    { Name: "Big Mac", Calories: 540, Fat: 28 }, // index 0
    { Name: "Whopper", Calories: 660, Fat: 40 }, // index 1
    { Name: "Chicken Nuggets (10 pcs)", Calories: 470, Fat: 28 }, // index 2
    { Name: "Fries (medium)", Calories: 340, Fat: 16 }, // index 3
    { Name: "Sundae", Calories: 280, Fat: 12 },
    { Name: "Chicken Sandwich", Calories: 500, Fat: 22 },
    { Name: "Fish Sandwich", Calories: 380, Fat: 18 },
    { Name: "Salad (Caesar)", Calories: 350, Fat: 25 },
    { Name: "Apple Pie", Calories: 240, Fat: 12 },
    { Name: "Soft Drink (medium)", Calories: 150, Fat: 0 },
    { Name: "Milkshake (medium)", Calories: 600, Fat: 20 },
    { Name: "Taco Salad", Calories: 550, Fat: 35 },
    { Name: "Chili Cheese Fries", Calories: 600, Fat: 40 },
    { Name: "Mozzarella Sticks (4 pcs)", Calories: 300, Fat: 20 },
    { Name: "Onion Rings", Calories: 410, Fat: 25 },
    { Name: "Breakfast Burrito", Calories: 300, Fat: 15 },
    { Name: "Pancakes (3 pcs)", Calories: 350, Fat: 10 },
    { Name: "Egg McMuffin", Calories: 300, Fat: 12 },
    { Name: "Hash Browns", Calories: 140, Fat: 8 },
    { Name: "Fruit Smoothie", Calories: 200, Fat: 2 },
    { Name: "Bagel with Cream Cheese", Calories: 450, Fat: 20 }, // index 20
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Helper: randomNumber(min, max)
// Returns a random integer N such that min ≤ N ≤ max.
// ─────────────────────────────────────────────────────────────────────────────
function randomNumber(min, max) {
  // 1. Compute the size of the inclusive range.
  //    If min=0 and max=9, range = 10.
  const range = max - min + 1;

  // 2. Math.random() returns a float f, where 0 ≤ f < 1.
  //    Multiplying by range gives 0 ≤ f*range < range.
  const randomFloat = Math.random() * range;

  // 3. Math.floor(...) converts the float down to an integer 0 ≤ i ≤ range-1.
  const randomIntFromZero = Math.floor(randomFloat);

  // 4. Shift up by min so that the result lies between min and max inclusive.
  return randomIntFromZero + min;
}

// ─────────────────────────────────────────────────────────────────────────────
// Helper: getColumn(tableName, columnName)
// Looks up a table by name in DataTables and returns an array of the values
// in the given column for every row.
// ─────────────────────────────────────────────────────────────────────────────
function getColumn(tableName, columnName) {
  // 1. Find the table object by its name key.
  const table = DataTables[tableName];

  // 2. If the table doesn’t exist, throw an error so we can detect typos early.
  if (!table) {
    throw new Error(`Table "${tableName}" not found in DataTables.`);
  }

  // 3. Check if the column exists in the first row of the table.
  if (!table[0] || !(columnName in table[0])) {
    throw new Error(
      `Column "${columnName}" not found in table "${tableName}".`
    );
  }

  // 4. Use Array.prototype.map to pull out the desired column from each row.
  //    row[columnName] uses bracket-notation to access the property named columnName.
  const columnValues = table.map(function (row) {
    // If a row doesn’t have that column, row[columnName] will be undefined.
    return row[columnName];
  });

  // 5. Return the array of values.
  return columnValues;
}

module.exports = {
  randomNumber,
  getColumn,
};
