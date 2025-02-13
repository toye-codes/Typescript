// Challenge: Working with Union Types
// Basic Union Type:

// Create a variable userId that can hold either a number or a string.
// Assign it a number first, then reassign it to a string.


// Function with Union Type Parameter:

// Create a function displayId that takes a parameter id, which can be a number or a string.
// Inside the function, log "User ID is: " followed by the id.
// Call the function with both a number and a string.


// Union Type in an Object:

// Create an object product with the following properties:
// name: a string
// price: a number
// discount: can be either a number or "none" (string)
// Assign values to product, where discount is a number first, then update it to "none".


// Array with Union Type:

// Create an array values that can hold both numbers and strings.
// Add three numbers and two strings to the array.
// Loop through the array and log each value.


// Type Checking in Union:

// Modify the displayId function to check if id is a number or string using typeof.
// If it’s a number, multiply it by 2.
// If it’s a string, convert it to uppercase.
// Log the modified result.


// Task 1

let userId: number | string = 20;
userId = 'Toye';
console.log(userId);

// Task 2

function displayId(id:number | string) {
    console.log(`user ID is ${id}`);
}

displayId(20);
displayId("Id is a string");


// Task 3

const product: { name: string; price: number; discount: number | string; } = {
    name: "toothpaste",
    price: 500,
    discount: 20
}

product.discount = "none"

// Task 4

const myArray: (number | string)[] = [1, "two", 3, "four",5];

for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
}


// Task 5

function myId(newId:string | number) {
    if (typeof newId === "string") {
        console.log(newId.toUpperCase());
    } else if(typeof newId === "number") {
        let sum = newId * 2
        console.log(sum);
    }
}

myId(20);
myId("Leave");