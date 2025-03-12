

function message1(name:string){

    if(name){
        console.log("Hello:",name.toUpperCase())

    }else{
        console.log("Just Hello")
    }
}

type data= string | null

// function message2(name: string |null){
function message2(name: data){

    if(name){
        console.log("Hello:",name.toUpperCase())

    }else{
        console.log("Just Hello")
    }
}



message1("Shafeeq")

/*

    message()
    in Javascript this is valid,
    we can call function without passing any thing means nul value

*/

message2(null)