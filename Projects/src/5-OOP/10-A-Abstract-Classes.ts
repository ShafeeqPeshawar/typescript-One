

abstract class StateBankUK{

    public abstract accoutnOpen():void;
    public abstract deposite(amount:number):void;
    public abstract withdraw(amount:number):void;
}


class HSBC_UK extends StateBankUK{

    public accoutnOpen():void{

        console.log("Account Open")
    }
    public deposite(amount:number):void{
        console.log("DEposite Amount:",amount)
    }
    public withdraw(amount:number):void{
        console.log("WitDraw Amount:",amount)
    }

}
let refX=new HSBC_UK();
refX.accoutnOpen()
console.log("-----------------------------")
let refX2:StateBankUK=new HSBC_UK();
refX2.accoutnOpen()
