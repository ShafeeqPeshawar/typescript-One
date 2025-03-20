/*

Numeric Index Signatures

If we use number as the index type, TypeScript automatically converts 
it to a string:
*/

interface NumericIndex {
  [index: number]: string;
}

const dataX: NumericIndex = {
  0: "zero",
  1: "one",
  2: "two",
};

console.log(dataX[1]); // ✅ "one"
console.log(dataX["1"]); // ✅ "one" (converted to a string)
