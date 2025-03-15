
/*

tsconfig.json

strictNullChecks:true
make this false and typescript will ignore the null values


*/

function greet(name: string | null) {
    if (name) {
      console.log(`Hello, ${name}!`);
    } else {
      console.log("Hello, guest!");
    }
  }
  
  greet("Alice"); // Hello, Alice!
  greet(null);    // Hello, guest!
  
