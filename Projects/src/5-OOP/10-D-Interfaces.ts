

 interface StateBankUK1{

      accoutnOpen():void;
      deposite(amount:number):void;
      withdraw(amount:number):void;
}


class HSBC_UK1 implements StateBankUK1{

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
let refX1=new HSBC_UK1();
refX1.accoutnOpen()
console.log("-----------------------------")

