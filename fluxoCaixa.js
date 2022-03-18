/* ## Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesa e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguindo do valor do saldo

*/


let revenue = [ 2000.00, 1000, 500.00 ]    // receitas
let expenses = [ 1500.00, 3000.50 ]  // despesas

function totalCalculation() {
    let totRevenue = 0;
    let totExpenses = 0;
    let balance;
    
    // total de Receita
    for ( let valueUnitRevenue of revenue ){
        totRevenue += valueUnitRevenue
    }    

    // total de Despesas
    for ( let valueUnitExpenses of expenses ) {
        totExpenses += valueUnitExpenses
    }

    // saldo Total
    balance = totRevenue - totExpenses    

    // Informando se o Saldo é Negativo ou Poitivo
    if ( balance > 0 ){
        return `Saldo Positivo: R$${Number.parseFloat(balance).toFixed(2).replace('.',',')}`
    } else {
        return `Saldo Negativo: R$${Number.parseFloat(balance).toFixed(2).replace('.',',')}`
    }

}

console.log(totalCalculation())












