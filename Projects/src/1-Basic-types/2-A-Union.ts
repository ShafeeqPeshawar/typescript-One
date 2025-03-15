
/*
    A union type in TypeScript allows a variable to hold values of multiple types. 
    It’s written using the | (pipe) operator.



*/

let value: string | number;
value = "Hello"; //  Valid
value = 42;      //  Valid
value = true;    //  Error (boolean is not allowed)
