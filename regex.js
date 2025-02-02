function validateMasterCard(cardNumber) {
    // Remove any non-digit characters from the input
        cardNumber = cardNumber.replace(/\D/g, '');
    
    // Regex pattern for Master cards
        const cardPattern = /^5155[0-9]{12}$/;
    
        if (cardPattern.test(cardNumber)) {
    
            console.log(`Valid card number`);
            return true;
        }
    
        else {
            console.log(`Invalid card number`)
            return false;
        }
    
    }
    
    // Test the function
    
    console.log(validateMasterCard(`12345678`))
    
    console.log(validateMasterCard(`5155111111111111`)) 