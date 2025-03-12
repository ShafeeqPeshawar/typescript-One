

/*

all the constructors are executed

"noImplicitOverride": true,  in tsconfig.json then it enforces that we have to use the overrri keword

*/
class Drawing2{

    public letsDraw():void{
        console.log("Lets do drawinf")
    }
}

class Circle2 extends Drawing2{

    public override letsDraw(){
        console.log("We are drawing circle")
    }
    public message(){
        console.log("Hello my friends")
    }
    
}


let drawing3:Drawing2=new Circle2()
drawing2.letsDraw()
// drawing2.message()  will give an error as message is not accessable via parent reference variable 





