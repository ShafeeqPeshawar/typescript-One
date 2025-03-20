interface AnimalA {
    name1: string;
    makeSound(): void; // Method signature
}

const dogA: AnimalA = {
    name1: "Buddy",
    makeSound() {
        console.log("Woof! Woof!");
    },
};

dogA.makeSound(); // ✅ Output: Woof! Woof!
