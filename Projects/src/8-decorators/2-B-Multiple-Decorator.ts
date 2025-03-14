
/*



*/

function Component1(constructor:Function){

    console.log("Decorator 1:")
  }
  
function Component2(constructor:Function){

    console.log("Decorator 2:")
  }
  


function Pipe(constructor: Function){

    console.log('Pipe Consructore')
}

@Component1     // this decorator will execute Last
@Component2     // this decorator will execute Second
@Pipe           // this decorator will execute First
class ProfileComponent{

}

let ref1=new ProfileComponent()