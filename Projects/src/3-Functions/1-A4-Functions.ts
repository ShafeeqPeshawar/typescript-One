
/*

in tsconfig file uncomint the following, 
so if the condition is not what it will return?? undefined


 "noImplicitReturns": true, 


 so now it will give warnings if not returning a value
*/

function getNumber2(data:number){

    if(data>10){
        return "Good"
    }
}

console.log(getNumber2(2))

