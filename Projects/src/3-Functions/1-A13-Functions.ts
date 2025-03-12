
/*

Remember, rest parameters must come last in the function definition,
otherwise the TypeScript compiler will show an error. The following is not valid.

*/


let College = ( ...names: string[]) => {
    return "List Of Students:(" +  names.join(", ") + ".)";
}

let data1 = College("Shafeeq", "Peter", "Andy"); // returns  // List Of Students: Shafeeq,Peter,Andy

let data2 = College("John"); // returns List Of Students: John

console.log(data1)

console.log(data2)