
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
    console.log(`Property "${propertyKey}" is being decorated on`, target);
  }
  
  class Example {
    @LogProperty
    myProperty: string="james";
  
    @LogProperty
    static myStaticProperty: number=10;
  }
  
  // Output:
  // Property "myProperty" is being decorated on { constructor: [Function: Example] }
  // Property "myStaticProperty" is being decorated on [Function: Example]
  