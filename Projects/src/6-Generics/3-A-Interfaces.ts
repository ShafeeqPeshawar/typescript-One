
interface StateBank<Type1,Type2>{


        accountNumber:Type1;
        accountHolder:String;
        PostCode:Type2;

        createAccount(acno:Type1,acname:string,postcode:Type1):void;
        depositeMoney(amo:number):void;
        withDrawMoney(amo:number):void;
        checkDetails():void;


}

class HSBC implements StateBank{

}