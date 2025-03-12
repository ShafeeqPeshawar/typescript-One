
/*


Intersection Types
interfaces allowed us to build up new types from other types by extending them. TypeScript provides another construct called intersection types that is mainly used to combine existing object types.

An intersection type is defined using the & operator.

Here, we’ve intersected Colorful and Circle to produce a 
new type that has all the members of Colorful and Circle

*/

interface ColorfulQA {
    color: string;
  }
  interface CircleQA {
    radius: number;
  }
   
  type ColorfulCircleQA = ColorfulQA & CircleQA;

  function drawQA(circle: ColorfulCircleQA):void {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
  }
   
  // okay
  drawQA({color:"blue",radius: 42 });
 
  // oops
  drawQA({color:"red",radius: 89 });