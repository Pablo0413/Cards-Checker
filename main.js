// Function to validate a credit card number using the Luhn algorithm
function validateCred(arr) {
    let sum = 0; // Variable to store the sum of the digits
    let shouldDouble = false; // Flag to determine if the digit should be doubled

    // Iterate over the array from right to left
    for (let i = arr.length - 1; i >= 0; i--) {
        let digit = arr[i]; // Get the current digit
        // If the digit should be doubled
        if (shouldDouble) {
            digit *= 2; // Double the digit
            // If the doubled digit is greater than 9, subtract 9
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit; // Add the current digit (or modified digit) to the sum
        shouldDouble = !shouldDouble; // Toggle the shouldDouble flag
    }
    // Return true if the sum is divisible by 10, indicating a valid card number
    return sum % 10 === 0;
}

// Function to find invalid credit card numbers in a batch
function findInvalidCards(batch) {
    const invalidCards = []; // Array to store invalid cards
    
    // Iterate over each card in the batch
    for (const card of batch) {
        // If the card is invalid according to validateCred function
        if (!validateCred(card)) {
            invalidCards.push(card); // Add to the list of invalid cards
        }
    }

    return invalidCards; // Return the array of invalid cards
}

// Function to identify companies that issued invalid credit cards
function idInvalidCardCompanies(invalidCards) {
    const companies = []; // Array to store unique companies
    
    // Iterate over each invalid card
    for (const card of invalidCards) {
        const firstDigit = card[0]; // Get the first digit of the card

        // Use switch statement to determine the issuing company based on the first digit
        switch (firstDigit) {
            case 3:
                // Add American Express if not already included
                if (!companies.includes('Amex (American Express)')) {
                    companies.push('Amex (American Express)');
                }
                break;
            case 4:
                // Add Visa if not already included
                if (!companies.includes('Visa')) {
                    companies.push('Visa');
                }
                break;
            case 5:
                // Add Mastercard if not already included
                if (!companies.includes('Mastercard')) {
                    companies.push('Mastercard');
                }
                break;
            case 6:
                // Add Discover if not already included
                if (!companies.includes('Discover')) {
                    companies.push('Discover');
                }
                break;
            default:
                // Log a message if the company is not recognized
                console.log("Company not found");
                break;
        }
    }

    return companies; // Return the array of companies
}


// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Testing the functions
const invalidCards = findInvalidCards(batch); // Find invalid credit card numbers
console.log('Invalid Cards:', invalidCards); // Log the invalid cards

const invalidCompanies = idInvalidCardCompanies(invalidCards); // Identify companies for invalid cards
console.log('Invalid Card Companies:', invalidCompanies); // Log the companies

console.log(idInvalidCardCompanies([invalid1]));
console.log(idInvalidCardCompanies([invalid2]));
console.log(idInvalidCardCompanies(batch));








