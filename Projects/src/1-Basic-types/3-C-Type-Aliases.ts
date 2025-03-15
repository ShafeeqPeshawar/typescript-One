/*
    Interface

    An interface declaration is another way to name an object type:
    
    An interface in TypeScript is used to define the shape of an object. 
    It ensures that objects follow a specific structure.

      interface User {
      id: number;
      name: string;
      isAdmin: boolean;
    }

    let user: User = {
      id: 1,
      name: "Alice",
      isAdmin: true,
    };

    - The User interface defines an object structure.
    - The object must have all the specified properties.

    Optional Properties (?)
        interface Product {
            name: string;
            price: number;
            category?: string; // Optional
      }
      let item: Product = { name: "Laptop", price: 1000 }; // category is optional
      category? is optional, so it can be omitted.


       Readonly Properties
       interface Car {
          readonly reg: string;
          model: string;
        }

        let myCar: Car = { reg: "123456", model: "Tesla" };
        myCar.model = "BMW"; // Allowed
        myCar.reg = "654321"; // Error (readonly)
        -reg cannot be changed after initialization.


        Extending Interfaces (Inheritance)

        interface Animal {
          species: string;
        }

        interface Dog extends Animal {
          breed: string;
        }

        let pet: Dog = { species: "Canine", breed: "Labrador" };
        - Dog inherits species from Animal.

        Multiple Interface Inheritance

        interface Person {
          name: string;
        }

        interface Employee {
          id: number;
        }

        interface Worker extends Person, Employee {
          department: string;
        }

        let worker: Worker = {
          name: "John",
          id: 101,
          department: "IT",
        };
        - Worker combines Person and Employee


        Interfaces with Functions
        Define function types inside an interface:

        interface MathOperation {
            (a: number, b: number): number;
          }

          const add: MathOperation = (x, y) => x + y;
          console.log(add(5, 3)); // 8




*/

interface PointX {
  x: number;
  y: number;
}
 let data9:PointX={x:89,y:99}
 console.log(data9)

function printCoord(pt: PointX) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 200 });