/*

A type alias in TypeScript is a way to create a custom name for a type. It makes complex types easier to read and reuse.

This is convenient, but it’s common to want to use the same type more 
    than once and refer to it by a single name.

    we can give name to any builtin type

    type UserInputSanitizedString = string;

    A type alias is exactly that - a name for any type. The syntax for a type alias is:

*/

type alldigits=number

let num12:alldigits=90

type ID = number | string;

function testing(d1:ID):void{

    console.log(d1)
}

testing(102)
testing("Shafeeq")
