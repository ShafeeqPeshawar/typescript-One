/*

    This is convenient, but it’s common to want to use the same type more 
    than once and refer to it by a single name.

    we can give name to any buitin type

    type UserInputSanitizedString = string;

    A type alias is exactly that - a name for any type. The syntax for a type alias is:

*/

type ID = number | string;

function testing(d1:ID):void{

    console.log(d1)
}

testing(102)
testing("Shafeeq")
