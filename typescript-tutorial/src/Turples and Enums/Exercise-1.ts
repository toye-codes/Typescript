// Challenge
// Define an enum named ProductCategory with members Electronics, Clothing, and Books.
// Define a type alias named Product with properties:
// id (number)
// name (string)
// category (ProductCategory)
// price (number)
// stock (a tuple with two elements: quantity as number and location as string).
// Define a function named createProduct that takes a Product object as its parameter and returns a Product object.
// Call the createProduct function with an object that matches the Product type, store the result in a variable, and log the variable to the console.


// Task 1: Define the enum
enum ProductCategory {
  Electronics,
  Clothing,
  Books,
}

// Task 2: Define the type alias
type Product = {
  id: number;
  name: string;
  category: ProductCategory;
  price: number;
  stock: [quantity: number, location: string];
};

// Task 3: Define the createProduct function
function createProduct(product: Product): Product {
  product.name = "Bag";
  product.price = 10;
  product.stock = [10, "Lagos"]; 

  return product;
}

// Creating a valid product object
const productData: Product = {
  id: 1,
  name: "Laptop",
  category: ProductCategory.Electronics,
  price: 1000,
  stock: [5, "Warehouse A"],
};

// Calling the function with a valid product object
const firstProduct = createProduct(productData);
console.log(firstProduct);

// Task 4: Define myProduct as an arrow function
const myProduct = (product: Product): Product => {
  product.id = 1;
  product.name = "Bag";
  product.price = 10;
  product.stock = [10, "Lagos"];
  product.category = ProductCategory.Clothing;

  return product;
};

// Creating another product object and modifying it using myProduct function
const secondProduct = myProduct({
  id: 2,
  name: "Shoes",
  category: ProductCategory.Clothing,
  price: 50,
  stock: [20, "Abuja"],
});

console.log(secondProduct);
