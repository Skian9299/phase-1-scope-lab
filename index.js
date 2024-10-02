// Write your solution in this file!
// 1. Declare customerName in global scope
var customerName = 'bob';

// 2. Function to upper case customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3. Function to set bestCustomer
var bestCustomer;
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// 5. Function to change leastFavoriteCustomer, should throw an error
const leastFavoriteCustomer = 'someone else';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob'; // This will fail due to const
}
