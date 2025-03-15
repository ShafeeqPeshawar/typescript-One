/*

Union Types

    it work as OR

    number: number|string mean number can be string or number
    
    union type give a variable more then 1 types

    A union type is a type formed from two or more other types, 
    representing values that may be any one of those types. 
    We refer to each of these types as the union’s members.

    Let’s write a function that can operate on strings or numbers:

*/

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

printId(101);
printId("202");
