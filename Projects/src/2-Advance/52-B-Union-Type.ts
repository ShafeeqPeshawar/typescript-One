

function kgToLbas(weight: number |string):number{

    //console.log(typeof(weight))
    if(typeof(weight)=="number"){
        return weight*2.2;
    }else{
        //console.log(parseInt(weight))
        return parseInt(weight)*2.2
    }
    //return 78
}

console.log(kgToLbas(10))
console.log(kgToLbas("10kg"))
