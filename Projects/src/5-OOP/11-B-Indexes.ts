/*

Restricting Index Signature to a Certain Type

If we want to ensure only specific keys while still allowing dynamic keys, we can do this:

*/
interface User {
  name: string;
  age: number;
  [key: string]: string | number; // Index signature
}

const userA: User = {
  name: "Alice",
  age: 30,
  country: "USA", // Allowed due to index signature
  city:"Manchester",
  marks:89
};

console.log(userA.country); // 4
console.log(userA.city); // 
console.log(userA.marks); // 
console.log(userA["marks"]); // 



//The string | number value type ensures that both 
// fixed properties (name, age) and dynamic ones conform.