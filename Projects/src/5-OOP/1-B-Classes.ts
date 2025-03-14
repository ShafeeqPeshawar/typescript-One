
/*

error in the following class
the data member  must be initilized in the constructor

class Account{

    accnumber:number;
    custome:string;
    balance:number;
}

correct version

*/

class AccountHSBC{

    accnumber:number;
    customer:string;
    balance:number;

    //constructor cant have a return type
    constructor(acno:number,customer:string){

        this.accnumber=acno;
        this.customer=customer
        this.balance=0
    }
    // when creating method donot need to write the word function

    deposite(amount:number):void{
        this.balance+=amount
    }
    withdraw(amount:number){
        if(amount>=this.balance){
            console.log("Not Enough Balance")
        }else{
            this.balance-=amount
        }
    }
    showDetails():void{
        console.log(this.accnumber,this.customer,this.balance)
    }
}

let HSBCCustomerref=new AccountHSBC(123,"Shafeeq")
HSBCCustomerref.deposite(100)
HSBCCustomerref.showDetails()
HSBCCustomerref.withdraw(200)
HSBCCustomerref.showDetails()
HSBCCustomerref.withdraw(20)

HSBCCustomerref.showDetails()