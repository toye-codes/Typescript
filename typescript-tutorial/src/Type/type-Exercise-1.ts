// Exercise: Create a Shopping Cart System
// 1️⃣ Define a type alias Product with properties: id (number), name (string), price (number).
// 2️⃣ Define a type alias CartItem that extends Product and adds quantity (number).
// 3️⃣ Create an array cart to hold multiple CartItem objects.
// 4️⃣ Write a function addToCart that accepts a CartItem and adds it to the cart array.
// 5️⃣ Write a function calculateTotal that returns the total price of all items in the cart.

type product = { id: number; name: string; price: number };

type CartItem = product & { quantity: number };


const cart: CartItem [] = [
  { id: 1, name: "bags", price: 10, quantity: 5 },
  { id: 2, name: "shoes", price: 15, quantity: 6 },
];


function addToCart(cartItem: CartItem) {
    cart.push(cartItem);
    console.log(cart);
}

addToCart({ id: 3, name: "laptop", price: 30, quantity: 9 });


function calculateTotal(): number {
  return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
}

console.log(calculateTotal());
