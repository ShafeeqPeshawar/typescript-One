/*
    Interface

    An interface declaration is another way to name an object type:

*/
interface PointX {
  x: number;
  y: number;
}
 
function printCoord(pt: PointX) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });