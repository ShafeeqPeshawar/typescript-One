

/*
Restricting to Specific Types
Suppose you want a function to only accept numbers or strings.

T must be a string or a number

*/

function addT<T extends string | number>(a: T, b: T): T {
  
    return (a as any) + (b as any);
  }
  
  console.log(addT(5, 10));                  // Output: 15
  console.log(addT("Hello, ", "World!"));    // Output: Hello, World!
  addT(true,false)                           // not allowed
  

  // the following function can accept any type
  function addY<T >(a: T, b: T): T {
    return (a as any) + (b as any);
  }
  // Error: Objects are not allowed

  addY(5, 10)                 
  addY("Hello", "World!")
  addY(true,false)  