
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
    return function(targetx:any,propertyKey:string){
    console.log(`Property "${propertyKey}" is being decorated on`, targetx);
    /*  

        target: represet the object in which this property is
        key: represents how to get this particlat property from the object i.e target

        so
            target[key]



    */
    console.log(targetx,propertyKey)
    console.log(targetx[propertyKey])

    targetx[propertyKey] = targetx[propertyKey]+200
    }
}


class BankOfEnglandQ{

    ename:string="Shafeeq";
    @PropertyDecorator1()
    balance:number=0;
}

let QA12 = new BankOfEnglandQ()
QA12.balance=20
 console.log(QA12.balance)