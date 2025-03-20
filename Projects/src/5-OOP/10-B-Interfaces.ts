interface Employee {
    name: string;
    age: number;
    department?: string; // Optional property
}

const emp11: Employee = { name: "Alice", age: 25 };
const emp22: Employee = { name: "Bob", age: 30, department: "HR" };

console.log(emp11.department); // ✅ Output: undefined
console.log(emp22.department); // ✅ Output: HR
