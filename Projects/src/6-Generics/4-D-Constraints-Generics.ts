/*

generic constraints allow you to restrict the types that can be used as 
arguments for a generic type parameter. By adding constraints, 
you can ensure that the types passed into a generic function, class, or 
interface meet certain requirements.


*/

interface PersonX {
    name: string;
    age: number;
  }
  
  function greet<T extends PersonX>(person: T): void {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
  }
  
  // The generic T must match the Person interface structure.

  greet({ name: "Alice", age: 25 });    // Output: Hello, Alice! You are 25 years old.
  //greet({ name: "Alice" });             // Error: Property 'age' is missing
  