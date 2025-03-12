

/*

    we cant use these classes anywhere else unless we export them

    we want class CircleMM should be visible to outside world and by default
    but you can export other thins as well

*/
 function message():void{

    console.log("Hello my friends..")
}
 class CircleMM{

    public drawCircle(){
        let LineMMRef:LineMM = new LineMM();
        console.log("Draw Circle...")
        LineMMRef.drawLine();
    }


}


 class LineMM{

    public drawLine(){

        console.log("Draw Line...")
    }

}

export class BoxMM{
    public drawBox(){

        console.log("Draw Box...")
    }

}


export default CircleMM;