/*

TypeScript will only allow an operation if it is valid for every member of the union.
 For example, if you have the union string | number, 
 you can’t use methods that are only available on string:

*/

    function printingA(id: number | string) {
        console.log(id.toUpperCase());
    
    }
  
  /*
  
      Property 'toUpperCase' does not exist on type 'string | number'.
      Property 'toUpperCase' does not exist on type 'number'.
  
  
    The solution is to narrow the union with code, the same as you would in JavaScript without type annotations. Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.

    For example, TypeScript knows that only a string value will have a typeof value "string":

    */

    function printIdA(id: number | string) {
        if (typeof id === "string") {
            // In this branch, id is of type 'string'
            console.log(id.toUpperCase());
        } else {
            // Here, id is of type 'number'
            console.log(id);
        }
    }

    /*

    Another example is to use a function like Array.isArray:

    */

    function welcomePeople(x: string[] | string) {
        if (Array.isArray(x)) {
            // Here: 'x' is 'string[]'
            console.log("Hello, " + x.join(" and "));
        } else {
            // Here: 'x' is 'string'
            console.log("Welcome lone traveler " + x);
        }
    }

 

