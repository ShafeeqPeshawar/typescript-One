
/*

error in the following class
the data member must be initilized and must be initilized in the constructor

class Account{

    accnumber:number;
    custome:string;
    balance:number;
}

correct version

*/

class Account{

    accnumber:number;
    customer:string;
    balance:number;
    test:number=0; // we can initilize the members here and as well as in constructors as well

    //constructor cant have a return type
    constructor(acno:number,customer:string){

        this.accnumber=acno;
        this.customer=customer
        this.balance=0
    }

    showDetails():void{
        console.log(this.accnumber,this.customer,this.balance)
    }
}

let Customerref=new Account(123,"Shafeeq")

Customerref.showDetails()