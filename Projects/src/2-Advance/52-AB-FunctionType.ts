/*

You can use type to define function types:

type MathOperation = (x: number, y: number) => number;

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;

*/

type MathOperation = (x: number, y: number) => number;

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;

/*

The MathOperation type represents a function that takes two number parameters 
and returns a number.

*/