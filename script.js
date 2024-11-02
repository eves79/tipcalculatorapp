document.addEventListener('DOMContentLoaded', () => {
    const billInput = document.querySelector('.inputbox input');
    const tipButtons = document.querySelectorAll('.tip');
    const peopleInput = document.querySelector('.people input');
    const tipAmountDisplay = document.querySelector('.tip_amount .money');
    const totalAmountDisplay = document.querySelector('.total .money');
    const resetButton = document.getElementById('reset');

    let billAmount = 0;
    let tipPercentage = 0;
    let numberOfPeople = 1;    //initialize main inputd

    //calculate and display results
    function calculateAndDisplay() {
        if (numberOfPeople === 0) {
            alert('Can not be zero');
            return;
        }
        const totalTip = billAmount * (tipPercentage / 100);
        const tipPerPerson = totalTip / numberOfPeople;
        const totalPerPerson = (billAmount + totalTip) / numberOfPeople;

        // display results
        tipAmountDisplay.textContent = `$${tipPerPerson.toFixed(2)}`;
        totalAmountDisplay.textContent = `$${totalPerPerson.toFixed(2)}`;
    }

    // Update bill amount on input
    billInput.addEventListener('input', (event) => {
        billAmount = parseFloat(event.target.value) || 0;
        calculateAndDisplay();
    }); 
}); 




