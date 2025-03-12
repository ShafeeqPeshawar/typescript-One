/*

its not working


*/


function ComponentFreezeing(valueMM:Function){

    console.log("Class Name is :",valueMM.name)
    Object.freeze(valueMM) // this javascript code and will execute by java scrpt u,e typescrip donot execute this and give errors
    Object.freeze(valueMM.prototype)
}

@ComponentFreezeing
class FirstClassMy2{

    address:string="London"

    public message(){
        console.log("Hello My friends:")
    }

}

class FirstClassMy3 extends FirstClassMy2{


     public override message(){
        console.log("My friends are in Manchester")
    }

}
let refT2=new FirstClassMy3()
refT2.message()
