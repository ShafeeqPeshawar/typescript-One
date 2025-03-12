

let ename:string
let salary:number
let tax:number

ename="James Bond"
salary=5000
if (salary>=2000){
    tax=salary*21/100
}else{
    tax=salary*15/100
}

console.log("Employee Name:",ename)
console.log("Salary:",salary)
console.log("Tac Calculated is:",tax)