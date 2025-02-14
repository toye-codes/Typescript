// Task: Create a Function to Calculate Discounts
// 1️⃣ Create a function called calculateDiscount.
// 2️⃣ It should take two parameters:

// price (a number) – the original price of an item.
// discount (a number) – the discount percentage.
// 3️⃣ The function should return the final price after applying the discount.
// 4️⃣ If the discount is 0, return the original price.
// 5️⃣ Call the function with different values and log the results.

function calculateDiscount(price: number, discount: number): number {
  let myDiscount = price - (price * discount) / 100;
  return myDiscount;
}

console.log(`discount = ${calculateDiscount(5, 2)}`);
