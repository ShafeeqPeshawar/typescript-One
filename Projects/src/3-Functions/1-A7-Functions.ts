
/*

if parameters and not used. We shold get a warning

in tsconfig.json

    "noUnusedParameters": true,        

*/

function manchesterAddition(num1:number,num2:number):string{ // this line will give warning 

    let x:number; // his line will give warning
    return "hello"
 }
 
 console.log(manchesterAddition(2,3))