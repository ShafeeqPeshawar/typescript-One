/*

Any is a data type in TypeScript.
In TypeScript, the any type is a special type that can represent any value. 
It essentially disables type checking for variables and allows them to 
hold values of any type, making it similar to JavaScript's dynamic typing.

let temp: any;

temp = "string";
temp = 2;
temp = true;

Since we typed any data type to temp it expects all types of data-type and doesn’t 
give any error. It provided such flexibility that it also makes the compiler not generate 
an error at compile time if we call any method to an unknown type which is 
assigned with any type.


The following is not possible

let A=10
A="JAmes"
let B:number
B=true

but this is possible
let X:any
X=20
X="abc"
*/

let x:any
x=20
x="Shafeeq"
x=true

/*

when the variable is declred with any type , in that variable we can store any type of data
but his is againt the phlosphi of typescript
we use typescript for type safety, we use typescript because its typesafe
the best practice is to avoid using any type

Characteristics of any

No Type Checking: 
    Variables with the any type can be assigned any value, and their operations are not checked by TypeScript.
Opt-Out of Type Safety: 
    Using any bypasses TypeScript's type system, making it behave like plain JavaScript.
Fallback Type: 
    It is commonly used when you don't know the type of a value at compile time, or when working with third-party libraries or legacy code without type definitions.
*/