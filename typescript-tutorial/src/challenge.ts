// Create a variable of type string and try to use a string method on it.
// Create a variable of type number and try to perform a mathematical operation on it.
// Create a variable of type boolean and try to perform a logical operation on it.
// Try assigning a value of a different type to each of these variables and observe the TypeScript compiler's response.
// You can use type annotation or inference.


// Task 1
let message: string = 'I am learning typescript';
message.charAt(1).toLocaleLowerCase()
console.log(message);


// Task 2
let total: number = 5;
let girls: number = 3;
let boys: number = 2;

const average = ((boys + girls / 2 - total));
console.log(average);

// Task 3
let isOutside: boolean = true;

function x() {
    if (isOutside) {
      console.log("we outside!");
    } else if (!isOutside) {
      console.log("we are not outside");
    }
}
x()




