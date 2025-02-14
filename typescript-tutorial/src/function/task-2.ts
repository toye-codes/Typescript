// Task 2:
// Create a function called convertToSeconds that takes a number (representing minutes) as a parameter and returns the equivalent time in seconds.

//  Requirements:

// The function should accept one number as input.
// It should return the converted value in seconds.
// Call the function with different values and log the results.

const seconds: number = 60;

function convertToSeconds(minutes: number): number {
  let toSeconds = minutes * seconds;
  return toSeconds;
}

const minutes = 10;
const time = convertToSeconds(minutes);

console.log(`${minutes} minutes = ${time} seconds`);
