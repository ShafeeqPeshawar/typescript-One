/*

Declaring Arrays in TypeScript

    1. Using Square Brackets

    let numbers: number[] = [1, 2, 3, 4, 5];
    let strings: string[] = ["apple", "banana", "cherry"];

    2. Using Generic Array Type

    let numbers: Array<number> = [1, 2, 3, 4, 5];
    let strings: Array<string> = ["apple", "banana", "cherry"];

Both styles are equivalent and depend on your preference or coding standards.

1. Homogeneous Types
    Arrays contain elements of the same type:
    let names: string[] = ["Alice", "Bob", "Charlie"];
    // names.push(42); // Error: Argument of type '42' is not assignable to type 'string'

2. Type Inference TypeScript can infer the type of an array based on its elements:
    let mixed = [1, 2, 3]; // Inferred as number[]

3.Readonly Arrays
    You can declare arrays as read-only to prevent modification:
    let readonlyArray: readonly number[] = [1, 2, 3];
    // readonlyArray.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'

Operations on Arrays
1. Accessing Elements
    let fruits: string[] = ["apple", "banana", "cherry"];
    console.log(fruits[0]); // Output: apple

2. Adding and Removing Elements
    let numbers: number[] = [1, 2, 3];
    numbers.push(4); // Adds an element to the end
    numbers.pop();   // Removes the last element
    numbers.unshift(0); // Adds an element to the beginning
    numbers.shift();    // Removes the first element
3. Iterating Over Arrays
    let animals: string[] = ["dog", "cat", "rabbit"];

    // Using for loop
    for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
    }

    // Using for-of loop
    for (let animal of animals) {
    console.log(animal);
    }

    // Using forEach
    animals.forEach((animal) => console.log(animal));


Union Arrays:

    let mixed: (number | string)[] = [1, "two", 3];
    You can allow multiple types in an array using a union type:
    mixed.push("four"); // OK

Generic Arrays
    TypeScript's generics can be used for arrays, especially for functions:
    function getFirstElement<T>(arr: T[]): T {
    return arr[0];
    }

    let numbers = getFirstElement([1, 2, 3]); // numbers: number
    let strings = getFirstElement(["a", "b", "c"]); // strings: string

Readonly vs Mutable Arrays
    TypeScript allows you to declare arrays as immutable using readonly:
    let mutableArray: number[] = [1, 2, 3];
    mutableArray[0] = 10; // OK

    let immutableArray: readonly number[] = [1, 2, 3];
    // immutableArray[0] = 10; // Error: Index signature in type 'readonly number[]' only permits reading


Array Methods
    TypeScript arrays inherit all standard JavaScript methods, including:

    Mutating Methods:
        push(), pop(), shift(), unshift()
        splice()
        sort(), reverse()

    Non-Mutating Methods:
        map(), filter(), reduce(), find()
        concat(), slice()
        indexOf(), includes()

        let numbers = [1, 2, 3, 4, 5];
        let doubled = numbers.map((n) => n * 2); // [2, 4, 6, 8, 10]
        let evens = numbers.filter((n) => n % 2 === 0); // [2, 4]


*/

let names: string[] = ["Alice", "Bob", "Charlie"];
names.push("John")
console.log(names)
names.push(42); // Error: Argument of type '42' is not assignable to type 'string'
names.push("Tadas")
console.log(names)
names.pop();   // Removes the last element
console.log(names)
names.shift();    // Removes the first element
console.log(names)

//----------------------------------------------
// Union Arrays:

    let mixed: (number | string)[] = [1, "two", 3];
    //You can allow multiple types in an array using a union type:
    mixed.push("four"); // OK
    mixed.push(82); // OK
    console.log(mixed)
    mixed.push(true); // error

    let mixed2: (number | string|true)[] = [1, "two", 3,true];

    
// --------------------------------------------------------
    // Readonly vs Mutable Arrays
    //TypeScript allows you to declare arrays as immutable using readonly:
    let mutableArray: number[] = [1, 2, 3];
    mutableArray[0] = 10; // OK
    mutableArray.push(34) // all good 34 will be added to array

    
//---------------------------------------------------------
    // Readonly vs Mutable Arrays
    let immutableArray: readonly number[] = [1, 2, 3];
    immutableArray.push(45) // not allwed as its an read only array

//---------------------------------------------------------
    // Readonly vs Mutable Arrays
    let immutableArray2: readonly (number|string)[] = [1, 2, 3,"shafeeq"];
    immutableArray.push(45) // not allwed as its an read only array
