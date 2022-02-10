document.getElementById("deposit-button").addEventListener('click', function () {

    const depositInputField = document.getElementById("deposit-input");

    const depositInput = depositInputField.value;


    const previousDeposit = document.getElementById("previous-deposit")

    const previousDepositAmount = previousDeposit.innerText

    const newDepositAmont = parseFloat(previousDepositAmount) + parseFloat(depositInput)

    previousDeposit.innerText = newDepositAmont;

    depositInputField.value = ""

})