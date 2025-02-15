type Employee = { id: number; name:string; department:string };
type Manager = { name: string; employees: number };

const john: Employee = {
    id: 1,
    name: "john",
    department: "health"
}

const wade: Employee = {
    id: 2,
    name: "Wade",
    department: "Finance"
}


const Thomas: Manager = {
    name: "Thomas",
    employees: 4
}
    
type Staff = Employee | Manager

// Function to print staff details

function printStaffDetails(Staff:Staff) {
    if ("employees" in Staff) {
        console.log(`manager's name is ${Staff.name}`);
    } else {
        console.log('not an employee');
    }
}

printStaffDetails(john);
printStaffDetails(wade);
printStaffDetails(Thomas);
