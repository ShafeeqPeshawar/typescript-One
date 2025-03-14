
/*

    Method Component needs 2  paramater

    1. Object that owns the target method
    2. Name of the target method
    3. Descriptor objet of the target method

    we want to do some of our operations before and after executing the 
    displayMethod on the class
*/

function MethodComponent1(target: any, methodName:string,descriptor:PropertyDescriptor){

    console.log("-----------------------")    
    console.log("Something Before the method")
    const method1=descriptor.value
    descriptor.value("hi")
    console.log("Samething After the method")
    console.log("-----------------------")
    
}

class Person{

    @MethodComponent1
    displayMessage(){
        console.log("Hello my friends")
    }
}