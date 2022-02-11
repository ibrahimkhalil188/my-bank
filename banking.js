document.getElementById("deposit-button").addEventListener('click', function () {

    const depositInputField = document.getElementById("deposit-input");

    const depositInput = depositInputField.value;
    if (depositInputField.value <= 0) {
        alert("Only positive amount accepted")
    }

    else {
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

    }
})

document.getElementById("withdraw-button").addEventListener('click', function () {

    const withdrawInputField = document.getElementById("withdraw-input");

    const withdrawInputAmount = withdrawInputField.value;

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