
/*

    Method Component needs 2  paramater

    1. Object that owns the target method
    2. Name of the target method
    3. Descriptor objet of the target method

    Changing the funtionality of the methods having different signatures
    means aff some thif to the current code

*/

function MethodComponent1(target: any, methodName:string,descriptor:PropertyDescriptor){
    
    const function1=descriptor.value as Function
    descriptor.value=function(...args:any){
        console.log("Before ---")    
            function1(...args)
        console.log("After ---")
    }
}

class Person{
    
    @MethodComponent1
    displayMessage(msg:string){
        console.log("Message:"+msg)
         }

         @MethodComponent1     
         doubleTheNumber(num1:number){
                 console.log("Doubling the number:"+(num1*2))
         }
    
         @MethodComponent1     
         info(name:string,salary:number,address:string){
                 console.log(name+" lives at "+address+" and his salary is "+salary)
         }
              
              
}

let ref1= new Person()
ref1.displayMessage("SHAFEEQ is Back")
ref1.doubleTheNumber(10)
ref1.info("Shafeeq",1200,"Manchester")