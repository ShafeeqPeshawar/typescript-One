/*

Union Types:
The type keyword is often used to create union types, allowing a variable to have multiple types. For example:

type Result = number | string;

const value1: Result = 42;
const value2: Result = "Success";

The Result type can represent either a number or a string.

giving a variable or function more than 1 type

*/
let accnumber :string|number
accnumber=123
console.log(accnumber)

accnumber="M145DJ"
console.log(accnumber)

// cant assign boolean to accnumber, the data must be string or number
accnumber=true
console.log(accnumber)


type Result = string | number;

const value1: Result = "Success";
const value2: Result = 42;
