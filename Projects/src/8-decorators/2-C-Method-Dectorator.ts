
/*

    Method Component needs 2  paramater

    1. Object that owns the target method
    2. Name of the target method
    3. Descriptor objet of the target method
*/

function MethodComponent1(target: any, methodName:string,descriptor:PropertyDescriptor){

    console.log("Target Object:"+target)
    console.log("-----------------------")
    console.log("Method Name:"+methodName)
    console.log("-----------------------")
    console.log(descriptor)
    
}

class Person{

    @MethodComponent1
    displayMessage(){
        console.log("Hello my friends")
    }
}