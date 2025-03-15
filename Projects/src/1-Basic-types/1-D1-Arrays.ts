/*

in javascript array each element can of different type

let data=[45,'James',true,{regno:12,name:"peter"}]

*/

// every element of the array must be of the same type in typescript
// in the following array each element will be number

let data:number[]=[101,34,56,78]
console.log(data[2])


// the wollowing is also valid as the typescript
// will look at the data and wiil declare array as number

let salarys=[102,788,400]
console.log(salarys[2])


// this will declare an array of type any, in which anthing can be stored
//  hover the mouse over the itesm and you will see the type of the array


let items=[]
items[0]=2003
items[1]='James'
items[2]=true
items[3]={regno:101,name:"peter"}
console.log(items[3])
console.log("-----------------------")
items.forEach((item)=>{
        console.log(item)
    })





