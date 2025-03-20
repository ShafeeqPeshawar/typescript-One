/*

An intersection type allows you to combine multiple types into one. 
A value must satisfy all the combined types.

*/

type A = { x: number };
type B = { y: string };

type C = A & B; // Intersection Type

let obj: C = { x: 10, y: "hello" }; //  obj must have properties from both A and B.
console.log(obj)

