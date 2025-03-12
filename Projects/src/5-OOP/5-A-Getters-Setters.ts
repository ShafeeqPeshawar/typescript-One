
/*

getters and setters
write the key word
set  // to make the setter property
get // to make the getter property
*/


class Results{

    private physics:number;
    private chemistry:number;
    private totalmarks:number;
    private percentage:number;

    constructor(public regno:number,
                public stuname:string
    ){
        this.physics=0;
        this.chemistry=0;
        this.totalmarks=0;
        this.percentage=0;

    }

    // setter can have a return type
    set Physics(phy:number){
        if(phy>=0 && phy<=100){
            this.physics=phy
        }else{
            console.log("Invalid Physics MArks")
        }
    }

    get Physics():Number{

        return this.physics
    }

    set Chemistry(phy:number){
        if(phy>=0 && phy<=100){
            this.chemistry=phy
        }else{
            console.log("Invalid Physics MArks")
        }
    }

    get Chemistry():Number{

        return this.chemistry
    }
    private calsulateReslts(){
        this.totalmarks=this.physics+ this.chemistry
        this.percentage=this.totalmarks*100/200
    }
    showReslts(){
        this.calsulateReslts()
        console.log("Registration:",this.regno)
        console.log("Student Name:",this.stuname)
        console.log("Total Marks:",this.totalmarks)
        console.log("Total Marks:",this.percentage)
        

    }
}

let James=new Results(101,"JAmes")
James.Physics=98
James.Chemistry=41
console.log("Physics Marks:",James.Physics)
console.log("Chemistry Marks:",James.Chemistry)

console.log("----------------------------")
James.showReslts()