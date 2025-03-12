

class BankOfEngaland1{

    private static dollar:number=0;

    static set Dollar(dlr:number){
        BankOfEngaland1.dollar=dlr
    }
    public setDollar(dlr:number):void{
        // this.dollar=dlr error dollar is not in the object
        BankOfEngaland1.dollar=dlr
    }
    public changeCurrency(amo:number):void{

        console.log("Your Amoutn is:",amo*BankOfEngaland1.dollar)
    }
}

let hsbc1CityCenter=new BankOfEngaland1();
BankOfEngaland1.Dollar=300
hsbc1CityCenter.changeCurrency(2)