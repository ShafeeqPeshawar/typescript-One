

/*

The extends keyword on an interface allows us to effectively copy members from other named types, 
and add whatever new members we want.

*/
interface personaldataRec4 {
    empno:number,
    ename:string,
    salary:number
} 

interface EmployeeData extends personaldataRec4 {
    address:string

}

function displayData4(empno:number):EmployeeData{
    if( empno==1){

        return {
            empno:101,
            ename:"Shafeeq",
            salary:1200,
            address:"United Kingdom"
        }
    }else{

        return{
            empno:500,
            ename:"John Gordan",
            salary:9000,
            address:"Manchester"
        }

    }
}

let eemmpM:personaldataRecM = displayData4(100)

console.log(eemmpM)