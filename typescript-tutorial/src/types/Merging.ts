// Exercise: Merging Type Aliases
// Create two type aliases:

// Person should have name (string) and age (number).
// Job should have title (string) and salary (number).
// Create a new type alias Employee that merges Person and Job.

// Create an object employee1 that represents an employee, ensuring it has all the required properties.

// Write a function printEmployeeDetails that takes an Employee object and prints all its details.


// Object types
// Task 1
type person = {
    name: string;
    age: number;
}

type job = {
    title: string;
    salary: number;
}

// Task 2
type personProfile = person & job;

// Task 3
const employee1: personProfile = {
    name: "john",
    age: 30,
    title: "Banker",
    salary: 300000
}

// Task 4
function printEmployeeDetails(employee:personProfile) {
    console.log(employee);
}

printEmployeeDetails(employee1)





