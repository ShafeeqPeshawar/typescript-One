

/*

if write Access specfier in front of paramater in the constructor they become class propertied
and we donot have to declare them in class
with out the access specfiers the member are local variable of the constructor

we can use readoly modiers as well to make read only property
*/
class AccountHSBC4{

    tax:number

    //constructor cant have a return type
    constructor(public readonly accnumber:number,public customer:string,private balance:number,tax:number){

         this.tax=0
    }

    private calculateTax(){
        this.tax=this.balance*15/100
    }

    public deposite(amount:number){
        this.balance+=amount
    }
  
    showDetails(){
        this.calculateTax()
        console.log(this.accnumber,this.customer,this.balance,this.tax);
    }

}


let customer4= new AccountHSBC4(123,"shafeeq",100,0)
customer4.showDetails()
