
/*

A property decorator is a function applied to a class property. 
It is called at runtime when the class is defined, not when an instance is created. 
The decorator is passed metadata about the property, 
which you can use to modify or observe its behavior.


function propertyDecorator(target: Object, propertyKey: string | symbol): void;

target:
    For instance properties, target is the prototype of the class.
    For static properties, target is the class constructor.
propertyKey: 
    The name of the property being decorated.
*/



function LogProperty(target: any, propertyKey: string) {
   console.log("Property ")
   console.log(propertyKey)
   console.log("Target:")
   console.log(target);

  }
  /*
    target:
        For instance properties, target is the prototype of the class.
        For static properties, target is the constructor function of the class.
  
    propertyKey: 
      The name of the property being decorated.
        */
  
  class Example {
    myname:string="Shafeeq"
    @LogProperty
    myProperty: string="james";
  
    @LogProperty
    static myStaticProperty: number=10;
  }
  
  let reftt12=new Example()
  console.log(reftt12.myProperty)
  console.log(Example.myStaticProperty)
  
  // Output:
  // Property "myProperty" is being decorated on { constructor: [Function: Example] }
  // Property "myStaticProperty" is being decorated on [Function: Example]
  