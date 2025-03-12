
function message(value:string){

    console.log("Hello:",value)
}

message("Shafeeq")

/*
 this will not work

message(123) // send number but the function is expecting a string value


so to make it work
*/

function message2(value:string|number){
    console.log("Hello:",value)
}

message2("shafeeq")
message2(123)
/*

message2(true) will give error

*/
