
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

function ComponentAX(constructor1:Function){

    /*
      constructor1 is a parameter which will
     recieve the constructor fo the class on which this decorater si applied

     this paramater can be used to
      - Access the class name.
      - Modify the class by returning a new constructor.
      - Add properties or methods to the prototype or class itself.

*/
    console.log("Class Name:",constructor1.name)
   
   

  }
  
  @ComponentAX
  class FirstClassA{
  
  }

  
  @ComponentAX
  class FirstClassB{
  
  }
  

  
  /*
  
   decorator is called automatically
  
  */