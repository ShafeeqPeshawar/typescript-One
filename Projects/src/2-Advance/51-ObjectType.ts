/*

Object Types:
The type keyword is used to define object types. For instance:

*/

let employees:{
    readonly id:number,
    name: string,
    retire:(data:Date)=>void
} = {
    id:1,
    name:"Shafeeq",
    retire:(date:Date)=>{
        console.log(date)
    }
}

// the problem wiht this if we want to create another object we have to repeat the definitation

