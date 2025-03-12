


class MathsOne6{

    bignumber:number;
    constructor(num:number){
        this.bignumber=num
    }
    public addition(num1:number,num2:number):void{
        
        let result:number = num1 + num2;
         console.log("The result of Additio is:",result)
         console.log("Big Number:",this.bignumber)
    }
}


class Maths1 extends MathsOne6{
    

}



let QA2=new MathsOne6(2)
QA2.addition(21,32)