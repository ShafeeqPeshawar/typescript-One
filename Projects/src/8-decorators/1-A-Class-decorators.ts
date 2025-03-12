
/*


To enable experimental support for decorators, you must enable the experimentalDecorators 
compiler option either on the command line or in your tsconfig.json:


tsconfig.json:

{
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true
  }
}

*/


/*

we Decorators are just functions

*/

function Component(constructor:Function){

  console.log("Decorator Called")
}

@Component
class FirstClass{

}

let ref=new FirstClass()

/*

 the decorator is called automatically

*/