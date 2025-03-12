


class Info<Type1,Type2>{

    private id:Type1;
    private registration:Type2;

    constructor(id:Type1,reg:Type2){
        this.id=id
        this.registration=reg
    }

    public displayInformation(){
        console.log(this.id,this.registration)
    }

}


let refVariable1=new Info(21,'Shafeeq')
refVariable1.displayInformation()
//-------------------------------------------
let refVariable2=new Info("MC001",1234)
refVariable2.displayInformation()

//-------------------------------------------
let refVariable3=new Info("MA123",true)
refVariable3.displayInformation()

