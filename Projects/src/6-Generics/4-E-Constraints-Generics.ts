/*

Constrain to Classes
You can restrict a generic to types that extend a specific class.

*/

class Human{
    speak() {
        console.log("Human Speaks English");
      }
}

class Animal {
    speak() {
      console.log("Animal sound");
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log("Woof!");
    }
    override speak(){
        console.log("Animal sounds loud")
    }
  }
  
  // T must extend the Animal class
  function makeSound<T extends Animal>(animal: T): void {
    animal.speak();
  }
  

  const Loin = new Animal();
  makeSound(Loin);

  const dog = new Dog();
  makeSound(dog);           // Output: Animal sound

    const hum1=new Human();
    makeSound(hum1)

 
  // Error: Numbers are not animals
  // makeSound(123);
  