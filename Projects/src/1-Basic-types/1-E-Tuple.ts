/*

tuple is a fixed length array

In TypeScript, tuples are a special type of array that allow you to specify a fixed-length, 
ordered collection of elements with different types.

let person: [string, number] = ["Alice", 25];

- The first element must be a string.
- The second element must be a number.
- If you try to add an extra element or change the order, TypeScript will throw an error.

Key Features of Tuples
    1. Fixed Length & Order
        Tuples have a predefined length and types for each position.
    

*/

let user: [string, number] = ["Bob", 30];

user = ["Alice", "25"]; //  Error: "25" should be a number
user = [30, "Alice"];   //  Error: Order must be [string, number]
user.push(40);          //  Allowed, but can be restricted (see below)
console.log(user)

/*
    2. Optional Elements
    You can make tuple elements optional using ?:

*/

let data: [string, number?] = ["John"];

/*

    3. Readonly Tuples
    To prevent modifications:

*/
    let colors: readonly [number, number, number] = [255, 0, 0];
    colors[0] = 128; // Error: Readonly prevents modification
