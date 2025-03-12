

const messageB=():void=>{console.log("Hello my friends")}
messageB()

console.log("------------------")
const messageC=(name1:string):void=>{console.log("Hello:",name1)}
messageC("Shafeeq")

console.log("------------------")
const additionA=(num1:number,num2:number):void=>{console.log("Result:",num1+num2)}
additionA(2,3)

console.log("------------------")
const additionB=(num1:number,num2:number):void=>{
    let result=num1+num2   
    console.log("Result:",result)}
additionB(21,31)

console.log("------------------")
const additionC=(num1:number,num2:number):number=>{
    let result:number=num1+num2   
    return result
}
console.log(additionC(100,200))

console.log("------------------")
const additionD=(num1:number,num2?:number):number=>{
    let result:number=num1+num2   
    return result
}
console.log(additionD(1))
console.log("------------------")
const additionE=(num1:number,num2:number=100):number=>{
    let result:number=num1+num2   
    return result
}
console.log(additionE(1000))