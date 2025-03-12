
interface personaldataRecM {
    empno:number,
    ename:string,
    salary:number
} 
function displayData3(empno:number):personaldataRecM{
    if( empno==1){

        return {
            empno:101,
            ename:"Shafeeq",
            salary:1200
        }
    }else{

        return{
            empno:500,
            ename:"John Gordan",
            salary:9000
        }

    }
}

let eemmp:personaldataRecM = displayData3(100)

console.log(eemmp)