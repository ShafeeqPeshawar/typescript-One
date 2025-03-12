

/*

The unknown type in TypeScript is a safer alternative to the any type. 
It represents a value that could be any type but requires you to explicitly 
narrow down its type before performing operations on it. 
This type is particularly useful when you want to work with values of uncertain 
or dynamic types while still benefiting from TypeScript's type-checking.

The main difference between unknown and any is that unknown is much less permissive 
than any: we have to do some form of checking before performing most operations on 
values of type unknown, whereas we don't have to do any checks before performing 
operations on values of type any.

*note
any: You can perform any operation without any checks.
unknown: You must narrow the type before performing any operation.

let value: unknown;

let value1: unknown = value; // OK
let value2: any = value; // OK
let value3: boolean = value; // Error
let value4: number = value; // Error
let value5: string = value; // Error
let value6: object = value; // Error
let value7: any[] = value; // Error
let value8: Function = value; // Error


The unknown type is only assignable to the any type and the unknown type itself


DIFFERENCE BETWEEN any AND unknown TYPE

Feature     any	                                        unknown
Type Safety No type safety; disables all type checks.	Enforces type safety by requiring type narrowing before usage.
Use Case	Use when the type is completely dynamic,    Use when the type is uncertain but you still want type safety.
            and you don’t need type checks.	            
Operations	Allows any operation on the value.	        Requires narrowing before performing operations.
Error-Prone	High potential for runtime errors.	        Safer, as it prevents invalid operations without type checks.

*/


// Examples of unknowntype

let Xt1:undefined = 67
console.log(Xt1 +10 )       // warning 

//Requires narrowing before performing operations.

if(typeof Xt1 == "number"){
    console.log(Xt1 +10 )   // no warning
}
console.log()


// Example of any type
console.log("-----------------------------------")


let a2:any=45
console.log(a2 + 10)


/*

Key Takeaway	        any	                                                        unknown
Avoid using any	        It bypasses TypeScript's type system and can lead to bugs.	Use unknown as a safer alternative.
Explicit type checks    Not required, leading to potential runtime issues.	        Enforces explicit checks before usage.



unknown is the better choice when type safety matters but the exact type is not 
known upfront. Use any only as a last resort or for specific use cases like 
prototyping or working with untyped libraries.

*/