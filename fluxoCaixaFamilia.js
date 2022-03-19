let family = {
    incomes: [1000, 250, 250, 500.50],
    expenses: [500, 250, 2750.35]    
}

function sum(vetor) {
    let total = 0

    for (let value of vetor) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOK = total >= 0

    let balanceText = 'Negativo'
    if ( itsOK ) {
        balanceText = 'Positivo'
    }

    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2).replace('.',',')}`)
}
calculateBalance()
