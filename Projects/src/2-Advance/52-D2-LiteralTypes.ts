/*

TypeScript Literal Types

TypeScript Literal Types allow us to specify exact values as types of variables 
or types of return types of a function other than primitive data types this language 
contains. Literal Types define types of exact values in contrast to primitive types 
such as `number` which allows us to use a range of possible values. 
Therefore, these Literal Types only accept specific predefined values. 
This feature makes a variable, parameter, properties have extremely precise values 
of the type.

*/


type subjects = "HTML" | "CSS" | "Java"
// String type and can only contain the valuse HTML,CSS, JAva and nothing else is allowed

let subject:subjects

//subject="Python"



subject="HTML"
console.log(subject)


