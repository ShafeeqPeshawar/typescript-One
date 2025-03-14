
/*

    Method Component needs 2  paramater

    1. Object that owns the target method
    2. Name of the target method
    3. Descriptor objet of the target method

    Changing  the funtionality of the method, means aff some thif to the current code
*/

function MethodComponent1(target: any, methodName:string,descriptor:PropertyDescriptor){
    
    const function1=descriptor.value as Function
    descriptor.value=function(a:string){
      console.log("Before ---")    
            function1(a)
            console.log("After ---")
    }
}

class Person{
    @MethodComponent1
    displayMessage(msg:string){
       console.log("Message:"+msg)
        }
}

let ref1= new Person()
ref1.displayMessage("Hello my Manchester")