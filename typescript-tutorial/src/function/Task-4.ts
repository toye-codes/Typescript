// <!-- Calculate Final Price with Optional Discount
// Write a TypeScript function called calculateFinalPrice that:

// Takes two parameters:
// price (a required number)
// discount (an optional number)
// If a discount is provided, subtract it from the price.
// If no discount is provided, assume it to be 0 and return the original price. -->


function calculateDiscount(price:number, discount?:number):number {
    const productPrice = price - (discount || 0)
    return productPrice
}

console.log(calculateDiscount(100, 50));
console.log(calculateDiscount(10));
