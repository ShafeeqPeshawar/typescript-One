

/*

all the constructors are executed

"noImplicitOverride": true,  in tsconfig.json then it enforces that we have to use the overrri keword

*/
class Drawing{

    public letsDraw():void{
        console.log("Lets do drawinf")
    }
}

class Circle extends Drawing{

    public override letsDraw(){
        console.log("We are drawing circle")
    }
}

class Line extends Drawing{

    public override letsDraw(){
        console.log("We are drawing Line")
    }
}


function weAreDrawing(ref:Drawing):void{
    ref.letsDraw()
}

let drawing1:Drawing=new Circle()
let drawing2:Drawing=new Line()

weAreDrawing(drawing1)
weAreDrawing(drawing2)



