function openAccount1(accType: "current" | "savings"): void { 
	console.log(`Account Type: ${accType}`); 
} 

// openAccount("active");  // wouldnt work only current or savings allowed
openAccount1("current")
openAccount1("savings")
