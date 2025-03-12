

/*

all the constructors are executed

"noImplicitOverride": true,  in tsconfig.json then it enforces that we have to use the overrri keword

*/
class Drawing7{

    public letsDraw():void{
        console.log("Lets do drawinf")
    }
}

class Circle7 extends Drawing7{

    public override letsDraw(){
        console.log("We are drawing circle")
    }
}

class Line7 extends Drawing7{

    public override letsDraw(){
        console.log("We are drawing Line")
    }
}


let drawing:Drawing7=new Circle7()
drawing.letsDraw()

drawing=new Line()
drawing.letsDraw()


