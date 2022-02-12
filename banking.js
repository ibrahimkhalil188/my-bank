function getInput(inputIdName) {
    const depositInputField = document.getElementById(inputIdName);

    const depositInput = depositInputField.value;

    const depositInputValue = parseFloat(depositInput)

    depositInputField.value = ""

    return depositInputValue;
}

// deposit section 

document.getElementById("deposit-button").addEventListener('click', function () {

    const depositInputValue = getInput("deposit-input")

    const previousDeposit = document.getElementById("previous-deposit")

    const previousDepositAmount = previousDeposit.innerText


    const newDepositAmont = parseFloat(previousDepositAmount) + depositInputValue

    previousDeposit.innerText = newDepositAmont;

    // update balance

    const balance = document.getElementById("balance");

    const previousBalance = balance.innerText;

    const newbalance = parseFloat(previousBalance) + depositInputValue

    balance.innerText = newbalance;




})

// Withdraw section

document.getElementById("withdraw-button").addEventListener('click', function () {

    const withdrawInputField = document.getElementById("withdraw-input");

    const withdrawInput = withdrawInputField.value;
    const withdrawInputAmount = parseFloat(withdrawInput)

    const previousWithdraw = document.getElementById("previous-withdraw");

    const previousWithdrawAmout = previousWithdraw.innerText;

    const newWithdrawAmount = parseFloat(withdrawInputAmount) + parseFloat(previousWithdrawAmout)

    previousWithdraw.innerText = newWithdrawAmount;

    // update balance

    const balance = document.getElementById("balance");

    const previousBalance = balance.innerText;

    const newBalaceAfterWithdraw = parseFloat(previousBalance) - parseFloat(withdrawInputAmount)

    balance.innerText = newBalaceAfterWithdraw;

    withdrawInputField.value = ''

})