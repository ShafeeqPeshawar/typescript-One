/*



*/


function doSomethng(num1:number){ // thsi function is returning a decorator

    if (num1==1){
        return function(constructor:Function){

            console.log("First DEcorator",constructor.name)

        }
    }else{
        return function(constructor:Function){

            console.log("Second Decorator",constructor.name)

        }
    }

 
}

@doSomethng(1) // now are calling a decorator as a function so can pass the values and accordingly the decorator will do something
class FirstClassMy4{

    address:string="London"

    public message(){
        console.log("Hello My friends:")
    }

}


let refT4=new FirstClassMy4()

