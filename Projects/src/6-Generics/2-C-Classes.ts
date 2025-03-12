


class PatientDetails<Type1>{

   record:Type1;

    constructor(rec:Type1){
        this.record=rec
    }


    public displayInformation(){
        //this.record.forEach((rec:Type1)=> console.log(rec) )
        console.log(this.record)

    }

}





let patient1={patiendid:203,name1:"JAmes"}
let patient1Object1 = new PatientDetails(patient1)
patient1Object1.displayInformation()

console.log("---------------------------------------")
let patient2={patiendid:112,name1:"Spider Man",postcode:"M123",city:"MAnchester",country:"UK"}
let patient1Object2 = new PatientDetails(patient2)
patient1Object2.displayInformation()