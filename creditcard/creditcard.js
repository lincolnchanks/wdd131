function isCardNumberValid(number) {
    return number === '1234123412341234'
}

function displayError(msg) {
    document.querySelector('#error').textContent = msg;
}

function submitHandler(event) {
    
    let errorMsg = '';
    displayError('');

    let cardNumber = document.querySelector('#card-number');
    const cardNum = cardNumber.value.trim();
    // Check card length and validity
    if (!/^\d{16}$/.test(cardNum)) {
        errorMsg += 'Card number must be 16 characters long.\n';
    } 
    if (!isCardNumberValid(cardNum)) {
        errorMsg += 'Card number is not valid.\n';
    }
    // Check expiration date
    const expYear = Number(document.querySelector('#year').value);
    const expMonth = Number(document.querySelector('#month').value);
    const currentDate = new Date()

    // If the year is less than current OR the year equals the current AND the month is less than the current month.
    if (2000 + expYear < currentDate.getFullYear() || (2000 + expYear === currentDate.getFullYear() && expMonth <= (currentDate.getMonth()))) {
        errorMsg += 'Card is expired\n';
    }

    if (errorMsg != '') {
        displayError(errorMsg);
        event.preventDefault();
        return;
    }
}

document.querySelector('#credit-card-form').addEventListener('submit', submitHandler)