document.getElementById('deposite-button').addEventListener('click', function () {

    const depositeInputField = document.getElementById('deposite')
    const depositeInput = depositeInputField.value

    const typeOfAmmount = parseFloat(depositeInput)
    console.log(depositeInput);

    // set ammount in deposite box
    const depositeTotal = document.getElementById('deposite-total')
    const previousDeposite = depositeTotal.innerText
    const previousDepositeAmmount = parseFloat(previousDeposite)

    const newDeposite = previousDepositeAmmount + typeOfAmmount

    depositeTotal.innerText = newDeposite

    // update new balance

    const balanceTotal = document.getElementById('balance-total')
    const previousBalance = balanceTotal.innerText
    const previousBalanceAmmount = parseFloat(previousBalance)

    const newBalanceTotal = previousBalanceAmmount + typeOfAmmount
    balanceTotal.innerText = newBalanceTotal

    // clear
    depositeInputField.value = ''

})


document.getElementById('withdraw-button').addEventListener('click', function () {
    // get withdraw input
    const withdrawInput = document.getElementById('withdraw')
    const withdrawText = withdrawInput.value
    const withdrawAmmount = parseFloat(withdrawText)

    // withdraw update
    const withdrawTotal = document.getElementById('withdraw-total')
    const previousWithdrawText = withdrawTotal.innerText
    const previousWithdrawAmmount = parseFloat(previousWithdrawText)

    const newWithdrawtotal = previousWithdrawAmmount + withdrawAmmount
    withdrawTotal.innerText = newWithdrawtotal

    // update balance
    const balanceTotal = document.getElementById('balance-total')
    const previousBalance = balanceTotal.innerText
    const previousBalanceAmmount = parseFloat(previousBalance)

    const newBalanceTotal = previousBalanceAmmount - withdrawAmmount
    balanceTotal.innerText = newBalanceTotal

    // clear
    withdrawInput.value = ''

})