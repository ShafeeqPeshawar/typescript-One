interface Car {
    readonly model: string;
    year: number;
}

const myCar: Car = { model: "Toyota", year: 2022 };
myCar.year = 2023;  // ✅ Allowed
// myCar.model = "Honda"; // ❌ Error: Cannot assign to 'model' because it is a read-only property.
