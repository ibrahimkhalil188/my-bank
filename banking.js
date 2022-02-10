document.getElementById("deposit-button").addEventListener('click', function () {

    const depositInputField = document.getElementById("deposit-input");

    const depositInput = depositInputField.value;


    const previousDeposit = document.getElementById("previous-deposit")

    const previousDepositAmount = previousDeposit.innerText

    const newDepositAmont = parseFloat(previousDepositAmount) + parseFloat(depositInput)

    previousDeposit.innerText = newDepositAmont;

    // update balance

    const balance = document.getElementById("balance");

    const previousBalance = balance.innerText;

    const newbalance = parseFloat(previousBalance) + parseFloat(depositInput)

    balance.innerText = newbalance;

    depositInputField.value = ""

})