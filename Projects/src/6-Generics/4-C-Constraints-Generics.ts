

interface HasName {
    name: string;
  }
  
  function QAgreetings<T extends HasName>(obj: T): void {
    console.log(`Hello, ${obj.name}!`);
  }
  
  // Valid because the object has a `name` property
  QAgreetings({ name: "Alice", salary: 25 });  // Output: Hello, Alice!
  QAgreetings({ name: "Alice", postcode: 123,city:"Manchestr" });
  
  // Error: The object doesn't have a `name` property
  // greet({ age: 25 });
  