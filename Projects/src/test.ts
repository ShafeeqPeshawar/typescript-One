let dataQ:(number|string|boolean)[] = ["Arvin",2,3,4,5,6,true,8,9,false];
 
 
for (let i = 0; i < dataQ.length; i++) {
 
    if (typeof dataQ[i] === 'number') {
        console.log(dataQ[i] * 2);
    } else if (typeof dataQ[i] === 'string') {
        console.log("Hello " + dataQ[i]);
 
    } else {
        console.log(dataQ[i]);
    }
}