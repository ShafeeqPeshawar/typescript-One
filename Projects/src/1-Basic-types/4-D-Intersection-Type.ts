
/*

TypeScript Intersection types

An intersection type creates a new type by combining multiple existing types. 
The new type has all features of the existing types.

To combine types, you use the & operator as follows:

    type typeAB = typeA & typeB;

The typeAB will have all properties from both typeA and typeB.

*/


/*

Suppose that you have three interfaces: BusinessPartner, Identity, and Contact.

    interface BusinessPartner {
        name: string;
        credit: number;
    }

    interface Identity {
        id: number;
        name: string;
    }

    interface Contact {
        email: string;
        phone: string;
    }


The following defines two intersection types:

    type Employee = Identity & Contact;
    type Customer = BusinessPartner & Contact;

The Employee type contains all properties of the Identity and Contact type:

    type Employee = Identity & Contact;

    let e: Employee = {
        id: 100,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '(408)-897-5684'
    };


And the Customer type contains all properties of the BusinessPartner and Contact type:

*/

interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}
    
type Customer = BusinessPartner & Contact;

    let c: Customer = {
        name: 'ABC Inc.',
        credit: 1000000,
        email: 'sales@abcinc.com',
        phone: '00447912345'
    };

    console.log(c)

