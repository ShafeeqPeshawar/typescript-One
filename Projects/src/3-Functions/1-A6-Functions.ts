
/*

if variable declared and not used. We shold get a warning

in tsconfig.json

    "noUnusedLocals": true,    

*/

function manchester():string{

   let x:number; // his line will give warning
   return "hello"
}

console.log(manchester())