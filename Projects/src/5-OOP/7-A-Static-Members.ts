

class BankOfEngaland{

    static dollar:number=0;


    public setDollar(dlr:number):void{
        // this.dollar=dlr error dollar is not in the object
        BankOfEngaland.dollar=dlr
    }
    public changeCurrency(amo:number):void{

        console.log("Your Amoutn is:",amo*BankOfEngaland.dollar)
    }
}

let hsbc1=new BankOfEngaland();
hsbc1.setDollar(100)
hsbc1.changeCurrency(1)
hsbc1.changeCurrency(2)
console.log("---------------------------------------------")
let netwest1=new BankOfEngaland();
netwest1.changeCurrency(1)
netwest1.setDollar(200)
console.log("---------------------------------------------")
let barclays1=new BankOfEngaland();
barclays1.changeCurrency(1)
BankOfEngaland.dollar=300
barclays1.changeCurrency(1)