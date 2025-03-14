/*

In TypeScript, type assertions allow developers to override the compiler’s 
inferred type, informing it of the specific type of a value.

Type assertions are purely compile-time constructs and do not alter the 
runtime behavior of the code.
They are particularly useful when interfacing with APIs or 
third-party libraries that return values of type any

- How do type assertions differ from type casting in other languages?
Unlike type casting in languages like Java or C#, which may involve runtime type 
changes, type assertions in TypeScript are purely compile-time constructs. 
They do not alter the actual type or value at runtime; they only affect the 
compiler’s type checking.
 
let value: any = "This is a string";
let lengthOfString: number = (value as string).length;
console.log(lengthOfString);

- A variable value is declared with the type any, which means it can hold any 
type of value.

- Using a type assertion (as string), the compiler is informed that the 
value should be treated as a string.

-The length property is then accessed safely because the compiler recognizes the value as a string.

Type Assertion with Function Return Value

function getValue(): any {
  return 'Hello, TypeScript!';
}

let strLength: number = (getValue() as string).length;
console.log(strLength);

- The getValue function returns a value of type any.
- By asserting the return value as a string, we can safely access the 
length property.


Type Assertion with DOM Element


let element = document.querySelector('input[type="text"]');
let inputElement = element as HTMLInputElement;
console.log(inputElement.value);

- document.querySelector returns an Element type, which doesn’t have a 
value property.
- By asserting element as HTMLInputElement, we inform TypeScript of the specific element type, allowing access to the value property.



Type Assertion with Union Types


type Pet = {
  name: string;
  walk: () => void;
};

type Fish = {
  name: string;
  swim: () => void;
};

let myPet: Pet | Fish = { name: 'Goldie', swim: () => console.log('Swimming') };

(myPet as Fish).swim();

- myPet is of type Pet | Fish, meaning it could be either.
- By asserting myPet as Fish, we inform the compiler that myPet has a swim method,
 allowing its invocation.

*/