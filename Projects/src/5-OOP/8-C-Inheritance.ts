


class MathsOne{

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


class Maths12 extends MathsOne{
    
    smallnumber:number

    // if make constructor than we have to use super call to call the parents consructor
    constructor(amo:number){
        super(89)
        this.smallnumber=amo
    }

}



let QA22=new Maths12(2)
QA22.addition(21,32)