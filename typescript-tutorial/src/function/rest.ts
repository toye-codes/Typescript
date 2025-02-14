// Exercise: Using the Rest Parameter (...)
// Create a function called multiplyAndSum that:

// Accepts a multiplier (number) as the first argument.
// Accepts multiple numbers (rest parameter) as additional arguments.
// Multiplies each number in the rest parameter by the multiplier.
// Sums up the modified numbers.
// Returns a string displaying the result.



function multiplyAndSum(multiplier: number, ...numbers: number[]): string {
    // Multiply each number by the multiplier
    let multipliedNums = numbers.map(num => num * multiplier);
    
    // Sum up the multiplied numbers
    let total = multipliedNums.reduce((sum, num) => sum + num, 0);

    // Return the result as a formatted string
    return `The total after multiplication is: ${total}`;
}

// Test cases
console.log(multiplyAndSum(2, 1, 2, 3, 4, 5)); // Output: The total after multiplication is: 30
console.log(multiplyAndSum(3, 2, 4));         // Output: The total after multiplication is: 18
console.log(multiplyAndSum(5));               // Output: The total after multiplication is: 0 (handles empty numbers)
