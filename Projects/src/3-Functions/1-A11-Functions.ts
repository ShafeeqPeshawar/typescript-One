
/*

Rest Parameters

When the number of parameters that a function will receive is not known or 
can vary, we can use rest parameters. In JavaScript, this is achieved with 
the "arguments" variable. However, with TypeScript, we can use the rest 
parameter denoted by ellipsis ....

We can pass zero or more arguments to the rest parameter. 
The compiler will create an array of arguments with the rest 
parameter name provided by us.

*/


function dataProcessing(firstName: string, ...names: string[]) {
    return firstName + " " + names.join(" ");
  }
   
/*

In the above example, we have a function with two parameters: greeting and names.
 Here, names is a rest parameter denoted by ellipses .... 

In TypeScript, restOfName.join() is used to gather rest arguments and join 
them with a space in a function:

Remember, rest parameters must come last in the function definition,
otherwise the TypeScript compiler will show an error. The following is not valid.

*/

  let employeeName = dataProcessing("James", "Peter", "Smith", "khan");

  console.log(employeeName)