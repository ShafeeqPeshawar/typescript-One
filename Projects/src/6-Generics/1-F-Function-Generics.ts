
function Assignment<T>(value:T):T{
    value.id+=10
    return value
}

let employee:{

    id:number;
    name: string;
    city: string;
}

let emp1 = Assignment({id:101,name:'Shafeeq'})

console.log(emp1)

