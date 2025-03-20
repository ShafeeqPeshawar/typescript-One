
/*

A property decorator is a function applied to a class property. 
It is called at runtime when the class is defined, not when an instance is created. 
The decorator is passed metadata about the property, 
which you can use to modify or observe its behavior.


function propertyDecorator(target: Object, propertyKey: string | symbol): void;

target:
    For instance properties, target is the prototype of the class.
    For static properties, target is the class constructor.
propertyKey: 
    The name of the property being decorated.
*/
function PropertyDecorator1(){
    return function (target: any, propertyKey: string) {
        console.log("*")
        let value: number = 0; // Default value

        Object.defineProperty(target, propertyKey, {
            get: function () {
                return value;
            },
            set: function (newValue: number) {
                //console.log(`Setting ${propertyKey} to:`, newValue);
                value = newValue + 100; // Add 100 to any assigned value
            },
            enumerable: true,
            configurable: true,
        });
    };
}


class BankOfEnglandQ{

    ename:string="Shafeeq";
    @PropertyDecorator1()
    balance:number=0;
}

let QA12 = new BankOfEnglandQ()
QA12.balance=20
console.log("Balance:",QA12.balance)
QA12.balance=100
console.log("Balance:",QA12.balance)
