/*

What You Can Do with target

Operation	            Code Example	                                Description
Access Class Name	    target.name	                                    Retrieve the class name.
Modify Prototype	    target.prototype.newMethod = function() {}	    Add a method or property to the class's prototype.
Add Static Properties	target.someStaticProp = value	                Add static properties or methods directly to the constructor.
Replace                 Constructor	return class extends target { ... }	Replace the class with a new constructor that extends or modifies the original.
Use Metadata	        Reflect.defineMetadata('key', value, target)	Add metadata to the class using libraries like reflect-metadata.


Important Notes

    Returning a New Class: 
        If a class decorator returns a new class, the original class is 
        replaced by the returned class.
    
    Static vs. Instance Properties: 
        Changes to target directly (e.g., target.someProperty) affect static properties. 
        Changes to target.prototype affect instance properties or methods.
    
    Type Safety: To avoid losing type information, use TypeScript generics when modifying or extending a class.

*/


function ComponentA1(valueM:Function){

    console.log("Class Name::",valueM.name)
    //console.log(valueM.prototype)
}

//class One123{
//    public accountNO:String=123
//}

@ComponentA1
class FirstClassAAA extends One123{
    static dollar:number=203
    myaddress:string="London"
    constructor(public physics:number){
        super()
    }

    public mymessage(){
        console.log("Hello My friends:")
    }

}


let refT1=new FirstClassAAA(45)
console.log(refT1.physics)


