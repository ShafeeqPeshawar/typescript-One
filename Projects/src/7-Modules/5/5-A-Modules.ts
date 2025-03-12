
/*

another way of exporting th emobdule is
export {message, CircleMM1, BoxMM1,LineMM1 }

*/

 function message():void{

    console.log("Hello my friends..")
}

class CircleMM1{

    public drawCircle(){
        let LineMMRef:LineMM1 = new LineMM1();
        console.log("Draw Circle...")
        LineMMRef.drawLine();
    }


}


class LineMM1{

    public drawLine(){

        console.log("Draw Line...")
    }

}

 class BoxMM1{
    public drawBox(){

        console.log("Draw Box...")
    }

}

export {message, CircleMM1, BoxMM1,LineMM1 }


