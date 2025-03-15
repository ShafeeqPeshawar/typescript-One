
// not working properly 
/*

Intersection with Union Types (| & &)

Example 1: Combining Unions with Intersections


*/
    type A1 = { x1: string } | { y1: number };
    type B1 = { z1: boolean };

    type C1 = A1 & B1;

    let obj1: C1 = { x1: "Hello", z1: true }; // ✅ Works
    let obj2: C1 = { y1: 42, z1: false };    // ✅ Works
    let obj3: C1 = { x1:"Shafeeq",y1: 42, z1: false };    // ✅ Works this shouldnt work
    

