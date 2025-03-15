/*

Intersection with Interfaces
You can use intersections with interfaces too:


*/
interface Animal4 {
    species: string;
  }
  
  interface Pet4 {
    name: string;
  }
  
  type PetAnimal4 = Animal4 & Pet4;
  
  let myPet: PetAnimal4 = { species: "Dog", name: "Buddy" }; //myPet must have both species and name.

  console.log(myPet)