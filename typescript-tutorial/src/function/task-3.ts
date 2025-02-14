// Task 3
// Create a new array of names.
// Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
// Use this function to check if various names are in your array and log the results.

function checks(name: string): boolean {
  const nameList: string[] = ["Paul", "james", "toye", "loveth", "gift"];
  if (nameList.includes(name)) {
    return true;
  } else {
    return false;
  }
}

console.log(checks("toye"));


// Alternative

// function checks(name: string): boolean {
//     const nameList: string[] = ["Paul", "James", "Toye", "Loveth", "Gift"];
//     return nameList.includes(name);
// }

// console.log(checks("Toye")); // true
// console.log(checks("Michael")); // false
