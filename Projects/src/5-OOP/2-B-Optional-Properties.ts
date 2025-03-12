

/*


optional

nikename is property which we cant have for every customer so we declare optional 
by putting ? at the end of the name



*/

class Barclays2{

    accountnmber:number;
    customer:string;
    balance:number;
    nikename?:string; // if we donot put ? then its not optional and we definitly have to initilize it in the constructor

    constructor(acno:number,na:string){
        this.accountnmber=acno;
        this.customer=na;
        this.balance=0;
    }


    /*

    dataAssign(){
        this.accountnmber=15 // this line will gvie error as we are trying to change the value of ready only property
    }

    */
}

let object2 = new Barclays2(123,'James');