
function Assignment<T extends { id: number }>(value:T):T{
    console.log(value)
    return value
}

let employeeX:{

    id:number;
    name: string;
    city: string;
}

let emp1 = Assignment({id:101,name:'Shafeeq'})

console.log(emp1)

