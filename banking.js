function getInput(inputIdName) {
    const depositInputField = document.getElementById(inputIdName);

    const depositInput = depositInputField.value;

    const depositInputValue = parseFloat(depositInput)

    depositInputField.value = ""

    return depositInputValue;
}

function updateTotal(inputId, depositInputValue) {
    const previousDeposit = document.getElementById(inputId);
    const previousDepositText = previousDeposit.innerText;
    const previousDepositAmout = parseFloat(previousDepositText)


    previousDeposit.innerText = depositInputValue + previousDepositAmout;
}

// update balance

function updateBalance(depositInputValue, toAdd) {
    const balance = document.getElementById("balance");

    const previousBalance = balance.innerText;
    if (toAdd == true) {
        const newbalance = parseFloat(previousBalance) + depositInputValue
        balance.innerText = newbalance;
    } else {
        const newbalance = parseFloat(previousBalance) - depositInputValue
        balance.innerText = newbalance;
    }




}

// deposit section 

document.getElementById("deposit-button").addEventListener('click', function () {

    const depositInputValue = getInput("deposit-input")

    updateTotal("previous-deposit", depositInputValue)

    updateBalance(depositInputValue, true)
    /* const previousDeposit = document.getElementById("previous-deposit");
    const previousDepositText = previousDeposit.innerText;
    const previousDepositAmout = parseFloat(previousDepositText)


    previousDeposit.innerText = depositInputValue + previousDepositAmout; */

    // update balance

    /* const balance = document.getElementById("balance");

    const previousBalance = balance.innerText;

    const newbalance = parseFloat(previousBalance) + depositInputValue

    balance.innerText = newbalance;
 */



})

// Withdraw section

document.getElementById("withdraw-button").addEventListener('click', function () {

    /* const withdrawInputField = document.getElementById("withdraw-input");
 
     const withdrawInput = withdrawInputField.value;
 
     const withdrawInputAmount = parseFloat(withdrawInput) */

    const withdrawInputAmount = getInput("withdraw-input")

    updateTotal("previous-withdraw", withdrawInputAmount)

    updateBalance(withdrawInputAmount, false)

    /* const previousWithdraw = document.getElementById("previous-withdraw");

    const previousWithdrawText = previousWithdraw.innerText;
    const previousWithdrawAmout = parseFloat(previousWithdrawText)

    previousWithdraw.innerText = withdrawInputAmount + previousWithdrawAmout; */

    // update balance

    /* const balance = document.getElementById("balance");

    const previousBalance = balance.innerText;

    const newBalaceAfterWithdraw = parseFloat(previousBalance) - parseFloat(withdrawInputAmount)

    balance.innerText = newBalaceAfterWithdraw; */

    /* withdrawInputField.value = '' */

})