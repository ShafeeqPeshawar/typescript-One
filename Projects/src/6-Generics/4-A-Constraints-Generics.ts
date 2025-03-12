
/*

In TypeScript, generic constraints are rules that you can apply to generics to 
ensure the type passed to them meets certain criteria. 
These constraints help you work with specific properties or methods of the 
generic type safely.

Why Use Constraints?
Sometimes, you want to limit the types that can be passed to a generic to ensure 
they have certain characteristics, like having specific properties or being of a 
certain type.


How to Add Constraints
You use the extends keyword to add a constraint to a generic type.


Constraint to Built-In Types
You can constrain generics to primitive types like string or number:

*/

function Tax<T extends number>(value: T): number {
    return value * 21/100;
  }
  
  console.log(Tax(2000));    // Output: 20
  // console.log(double("10")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
  