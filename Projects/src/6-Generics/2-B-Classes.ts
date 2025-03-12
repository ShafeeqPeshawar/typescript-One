


class Information<Type1,Type2>{

    private id:Type1;
    private registration:Type2;

    constructor(id:Type1,reg:Type2){
        this.id=id
        this.registration=reg
    }

    setId(value:Type1){
        this.id=value;
    }
    getId():Type1{
        return this.id;
    }

    setRegistration(value:Type2){
        this.registration=value;
    }
    getRegistration():Type2{
       return this.registration;
    }
    


    public displayInformation(){
        console.log(this.id,this.registration)
    }

}


let refVariableA=new Information(21,'Shafeeq')
refVariableA.setId(45)
// refVariableA.setId("abc") will give Error, number is expected

refVariableA.setRegistration("Abc")

refVariableA.displayInformation()
//----------------------------------------

let refVariableB=new Information("ABC",21)
refVariableB.setId("M145DJ")
// refVariableA.setId(123) will give Error, String is expected

refVariableB.setRegistration(567)

refVariableB.displayInformation()


