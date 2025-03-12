

/*

all the constructors are executed

"noImplicitOverride": true,  in tsconfig.json then it enforces that we have to use the overrri keword

*/
class QAMaths{

    constructor(){
        console.log("Parent-Constructor-1")
    }

    public addition1():void{
        
        let result:number = 4+6
         console.log("The result of Addition is:",result)
    }
    public addition2(num1:number,num2:number):void{
        
        let result:number = num1 + num2;
         console.log("The result of Additio is:",result)
    }
}

class NewQaMaths extends QAMaths{

    constructor(){
        super()
        console.log("Child-Costructor-1")
    }

     public override addition1():void{
        super.addition1()
        let result:number = 100 + 200
         console.log("The result of Addition is:",result)
    }
}

let QAMathRef=new NewQaMaths()

QAMathRef.addition1()