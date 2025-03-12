
/*

best practice is to make a type and use it

*/

type ACCOUNT_TYPE = "current" | "savings"

function openAccount(accType: ACCOUNT_TYPE): void { 
	console.log(`Account Type: ${accType}`); 
} 

// openAccount("active");  // wouldnt work only current or savings allowed
openAccount("current")
openAccount("savings")
