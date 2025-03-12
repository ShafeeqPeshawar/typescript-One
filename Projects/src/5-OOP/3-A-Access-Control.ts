

/*

Access Specfiers

we have 3

private : by convention we put underscore as first character in proeprtyname
public : this is by default
protected

we can private , public, protected propertie and methods

*/
class AccountHSBC3{

    accnumber:number;
    public customer:string;
    private balance:number;
    private tax:number

    //constructor cant have a return type
    constructor(){

        this.accnumber=0;
        this.customer=""
        this.balance=0
        this.tax=0
    }

    private calculateTax(){
        this.tax=this.balance*15/100
    }

    public deposite(amount:number){
        this.balance+=amount
    }
    showBalance(){
        this.calculateTax()
        console.log(this.balance,this.tax)
    }

}


let customer1= new AccountHSBC3()
customer1.accnumber=101
customer1.customer="Shafeeq"
/*

customer1.balance=100 // this line wil not work as we are trying to access the private property

*/

customer1.deposite(100)
customer1.showBalance()
