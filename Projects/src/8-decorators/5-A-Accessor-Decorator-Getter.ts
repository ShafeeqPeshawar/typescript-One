
function GetterDecorator(target:any,methodName:String,descriptor:PropertyDescriptor)
{
    const original=descriptor.get // for getter we have to use Get not value
    descriptor.get=function(){ // getters can not have any argumentgs

    }
}
class ManchesterY{

    constructor(public firstname: string,public lastname:string){}

    get fullname(){
        return `${this.firstname}-  ${this.lastname}`
    }

}

let ref1=new ManchesterY("The","Shafeeq")
console.log(ref1.fullname)