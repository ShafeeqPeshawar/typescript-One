
/*

    Method Component needs 3  paramater

    1. Object that owns the target method
    2. Name of the target method
    3. Descriptor objet of the target method

    we want to do some of our operations before and after executing the 
    displayMethod on the class
*/

function MethodComponent1B(target: any, methodName:string,descriptor:PropertyDescriptor){

    console.log("-----------------------")    
    console.log("Something Before the method")
    const method1=descriptor.value
    descriptor.value()
    console.log("Something After the method")
    console.log("-----------------------")
    
}

class Person{

    @MethodComponent1B
    displayMessage(){
        console.log("Hello my friends")
    }
}

let ref9=new Person()
ref9.displayMessage()