
function displayData(person:{readonly empno:number,ename:string,salary:number}){
    person.empno=908 // would work a this isn readonlhy property
    person.salary=9000
    console.log(person)

}

displayData({empno:101,ename:'Shafeeq',salary:2000})

console.log("------------------------------------------------")

interface personaldata {empno:number,ename:string,salary:number}

let employee1:personaldata={empno:346,ename:"JAmes Bond",salary:3900}
displayData(employee1)


interface personaldataRec {empno:number,ename:string,salary?:number} // optional salary
function displayData2(person:personaldataRec){
    console.log(person)
}
let employee2:personaldataRec={empno:346,ename:"JAmes Bond"}
displayData2(employee2)
