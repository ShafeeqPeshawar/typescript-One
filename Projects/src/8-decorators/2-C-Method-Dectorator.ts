
/*

    Method Component needs 3  paramater

    1. Object that owns the target method
    2. Name of the target method
    3. Descriptor objet of the target method
*/

function MethodComponent1A(target: any, methodName:string,descriptor:PropertyDescriptor){

    console.log("Target Object:"+target)
    console.log("-----------------------")
    console.log("Method Name:"+methodName)
    console.log("-----------------------")
    console.log(descriptor)
    console.log(descriptor.value)
    
    
}

class Person{

    @MethodComponent1A
    displayMessage(){
        console.log("Hello my friends")
    }
}