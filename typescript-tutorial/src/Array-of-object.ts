// Here is how to addn an object inside an array in ts

let book = { title: "book", cost: 10 };
let pen = { title: "pen", cost: 10 };
let note = { title: "note" };

// Store objects in an array with optional cost property
let items: { title: string; cost?: number }[] = [book, pen, note];

const theList = () => {
    items.forEach((item) => {
        console.log(`Title: ${item.title}, Cost: ${item.cost ?? "No cost available"}`);
    });
};

theList();


// Explanation
// 1. the items variable stores the array
// 2. the object takes on the data types {}
// 3. The cost? is like a conditionak satatement that checks if costs exist or ot
//  => If costs exists, display it in the variable data else, pass the data without cost.
// 4. the [] ells TS that these needs to be in an array.
// 5. the variables are passed.