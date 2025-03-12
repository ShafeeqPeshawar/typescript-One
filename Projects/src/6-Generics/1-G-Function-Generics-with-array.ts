// with arrays

//function displaying string array only
function displaylogs(logs: string[]):void{

    logs.forEach((data:string) => {
        console.log(data)
    })
}


let logs=["abc","tree","xyz","abc"]

displaylogs(logs)


// generic function processing any type os array
function displaylogs2<T>(logs: T[]):void{

    logs.forEach((data:T) => {
        console.log(data)
    })
}

let salaries=[1002,456,787,655]
displaylogs2(salaries)