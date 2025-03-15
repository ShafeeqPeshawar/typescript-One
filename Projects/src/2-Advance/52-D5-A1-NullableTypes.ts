
/*

Nullable Types in TypeScript
In TypeScript, a nullable type is a type that allows a variable to have a null or undefined value.
By default, TypeScript does not allow null or undefined unless explicitly stated.


tsconfig.json

strictNullChecks:true
make this false and typescript will ignore the null values




    1. Basic Nullable Types (null | undefined)
        By default, TypeScript does not allow null or undefined unless explicitly stated.
        
        let username: string = "Alice";
        username = null; //  ERROR: Type 'null' is not assignable to type 'string'.

        To allow null or undefined, use union types:
        
*/

let username1: string = "Alice";
username1 = null; // ERROR: Type 'null' is not assignable to type 'string'.

let username2: string | null = "Alice";
username2 = null; // Allowed



