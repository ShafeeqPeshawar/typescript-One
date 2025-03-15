/*


function MinLength(length:number){

    return (target:any,propertyName:string)=>{
        let value:string;
        const descriptor:PropertyDescriptor={
            get() { return value},
            set(newValue:string){
                if(newValue.length<length){
                    throw new Error('${propertyName} shoud be at least ${length} character long')
                    value=newValue
                }
            }

        }

    }
}

*/

function MinLingth(target:any,propertyName:string){
    

}

class ManchesterZ{

    name1:string;
    constructor(na:string){

        this.name1=na

    }
}

let ref1 = new ManchesterZ('James')
console.log(ref1.name1)