/*

In TypeScript, index signatures allow you to define the types of properties 
that an object can have when you don’t know the exact names of the 
properties in advance. This is particularly useful when working with 
dynamically structured objects.



{
    [key: KeyType]: ValueType;
  }

  
- key is the placeholder name for the property name.
- KeyType must be string, number, or symbol (usually string is used).
- ValueType is the type of the values in the object.

*/

interface UserRoles {
    [role: string]: boolean;
  }
  
  const roles: UserRoles = {
    admin: true,
    editor: false,
    subscriber: true,
  };
  
  console.log(roles["admin"]); // ✅ true
  console.log(roles["unknown"]); // ✅ undefined (no error)

  // Here, any string key is allowed, and the value must be a boolean.
  