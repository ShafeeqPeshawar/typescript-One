
/*

typeOf will return "Object" means this is an object
instanceOf :is used to determine whether or not a value is an instance of another value or class.
e,g 
    ref1 instanceof AccountHSBC1 it will return true or false
*/

class AccountHSBC1{

    accnumber:number;
    customer:string;
    balance:number;

    //constructor cant have a return type
    constructor(acno:number,customer:string){

        this.accnumber=acno;
        this.customer=customer
        this.balance=0
    }

}
let HSBCCustomerref1=new AccountHSBC1(123,"Shafeeq")
console.log(typeof(HSBCCustomerref1))
console.log( HSBCCustomerref1 instanceof AccountHSBC1)

