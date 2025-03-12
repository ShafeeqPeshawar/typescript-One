


 export function message():void{

    console.log("Hello my friends..")
}

export class CircleMM{

    public drawCircle(){
        let LineMMRef:LineMM = new LineMM();
        console.log("Draw Circle...")
        LineMMRef.drawLine();
    }


}


export class LineMM{

    public drawLine(){

        console.log("Draw Line...")
    }

}

export class BoxMM{
    public drawBox(){

        console.log("Draw Box...")
    }

}


