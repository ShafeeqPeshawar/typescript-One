
/*

An intersection type is a type that merges several kinds into one. This allows you to 
combine many types to create a single type with all of the properties that you require. 
An object of this type will have members from all of the types given. 
The ‘&’ operator is used to create the intersection type.

*/
interface PersonalInfo { 
    empId: number; 
    name: string; 
    email:string;
  } 
    
  interface Address { 
    postcode: string; 
    city: string; 
  } 
    
  type intersected_type = PersonalInfo & Address; 
    
  let employee: intersected_type = { 
    empId: 3232, 
    name: "Shafeeq", 
    email: "shafeeq@qa.com", 
    postcode: "M145DJ", 
    city:"Manchester"
  }; 
    
  console.log(employee.empId); 
  console.log(employee.name);
  console.log(employee.email);
  console.log(employee.postcode);
  console.log(employee.city);
  
  
  