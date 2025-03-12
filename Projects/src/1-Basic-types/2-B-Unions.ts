/*

TypeScript will only allow an operation if it is valid for every member of the union.
 For example, if you have the union string | number, 
 you can’t use methods that are only available on string:

*/

function printing(id: number | string) {
  console.log(id.toUpperCase());

}

/*

    Property 'toUpperCase' does not exist on type 'string | number'.
    Property 'toUpperCase' does not exist on type 'number'.


*/

