
/*

Nullable Types in TypeScript
In TypeScript, a nullable type is a type that allows a variable to have a null or undefined value.
By default, TypeScript does not allow null or undefined unless explicitly stated.


tsconfig.json

strictNullChecks:true
make this false and typescript will ignore the null values




   2: Using Nullable Types in Functions
   You can define function parameters that accept null:


*/

function message1(name:string){
    if(name){
        console.log("Hello:",name.toUpperCase())
    }
}


message1(null) // will not work, this valid in javascript but not in typescript
