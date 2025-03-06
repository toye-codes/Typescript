// Exercise: Define an Interface for an Order System
// 1️⃣ Create an interface Order with the following properties:

// orderId (number, readonly)
// customerName (string)
// items (array of strings representing product names)
// totalAmount (number)
// status (string, which can be "pending", "shipped", or "delivered")
// A method printSummary() that logs a summary of the order.
// A method updateStatus(newStatus: string): string that updates and returns the new status.
// 2️⃣ Create an object that implements the Order interface and add appropriate values.

// 3️⃣ Implement both methods inside the object.

interface Order {
  orderId: number;
  customerName: string;
  items: string[];
  totalAmount: number;
  status: "pending" | "shipped" | "delivered"; // Enforce valid status values

  printSummary(): void;
  updateStatus(newStatus: "pending" | "shipped" | "delivered"): void; // Ensure status updates are valid
}

const foodOrder: Order = {
  orderId: 1,
  customerName: "Toye",
  items: ["rice", "beans", "coleslaw", "Chicken", "Yoghurt"],
  totalAmount: 15000,
  status: "shipped",

  printSummary() {
    console.log(
      `The customer ${this.customerName} ordered ${this.items.join(", ")} for a total of ${this.totalAmount}. Status: ${this.status}`
    );
  },

  updateStatus(newStatus) {
    if (newStatus === "delivered") {
      console.log(`Order status updated to: ${newStatus}`);
        this.status = newStatus; // Update the object's status
        
    } else {

      console.log(`Order status changed to: ${newStatus}`);
      this.status = newStatus;
    }
  },
};

// Call the methods
foodOrder.printSummary();
foodOrder.updateStatus("delivered");
foodOrder.printSummary(); 
