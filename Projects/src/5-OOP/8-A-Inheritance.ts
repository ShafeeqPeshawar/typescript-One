


class Maths{

    
    public addition(num1:number,num2:number):void{
        
        let result:number = num1 + num2;
         console.log("The result of Additio is:",result)
    }
}


class MathsA extends Maths{

}



let QA1=new MathsA()

QA1.addition(2,3)