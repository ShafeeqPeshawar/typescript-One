

/*


readonly

accountnumber is a property or data member which should not be changed any wehre in the code
we have make it readdonly
it can only be assigned a value in the constructor



*/

class Barclays{

    readonly accountnmber:number;
    customer:string;
    balance:number

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

let object1 = new Barclays(123,'James');