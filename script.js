    const billAmountInput = document.getElementById("billAmount");
    const numPeopleInput = document.getElementById('numPeople');
    const customTipInput = document.getElementById("customTip");
    const tipAmountDisplay = document.querySelector('.rightbox .tip_amount .money');
    const totalDisplay = document.querySelector('.rightbox .total-text-box + h4.money');
    const resetButton = document.getElementById('reset');

    let selectedTip=0   //initialize main input

    //function to handle tip button clicks
    function selectTip(tipPercentage) {
        selectedTip=tipPercentage; 
        customTipInput.value= ""; 
        calculateAndDisplay(); 
    }
    // custom input
    function customTipSelected(){
        selectedTip = parseFloat(customTipInput.value) || 0;
        calculateAndDisplay(); 
    }

    // calculate and display tip amount + total/person
    function calculateAndDisplay() {
        const billAmount = parseFloat(billAmountInput.value) ||0; 
        const numPeople = parseInt(numPeopleInput.value) || 1;

        if (numPeople === 0) {
            alert("Can not be zero");
            return;
    }
    const tipAmountPerPerson = (billAmount * (selectedTip / 100)) / numPeople;
    const totalPerPerson = (billAmount / numPeople) + tipAmountPerPerson;

    tipAmountDisplay.textContent = `$${tipAmountPerPerson.toFixed(2)}`;
    totalDisplay.textContent = `$${totalPerPerson.toFixed(2)}`;
}

//reset function to clear inputs
function resetTips() {
    billAmountInput.value = "";
    numPeopleInput.value = "";
    customTipInput.value = "";
    selectedTip = 0;
    tipAmountDisplay.textContent = "$0.00";
    totalDisplay.textContent = "$0.00";
}

