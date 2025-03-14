
/*

    Method Component needs 2  paramater

    1. Object that owns the target method
    2. Name of the target method
    3. Descriptor objet of the target method

    Replacing the funtionality of the method
*/

function MethodComponent1(target: any, methodName:string,descriptor:PropertyDescriptor){
    
    descriptor.value=function(a:string){
        for(let i=1;i<=10;i++){
            console.log(i+") "+a)
        
    }    
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