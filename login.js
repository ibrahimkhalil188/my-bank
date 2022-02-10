document.getElementById("submit-button").addEventListener('click', function () {
    const userEmail = document.getElementById("user-email");

    const userInputEmail = userEmail.value;

    const userPassword = document.getElementById("user-password");

    const userInputPassword = userPassword.value;
    if (userInputEmail == 'mybank@bank.com' && userInputPassword == 'mybank') {
        window.location.href = 'banking.html'
    }

})