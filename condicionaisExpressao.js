// Condicionais Aninhadas
// if - else - else if
let temperatura = 36
let heghTemperature = temperatura >= 39
let mediumTemperature = temperatura < 36 || temperatura >= 38

if (heghTemperature) {
    console.log('Temperatra Critíca')
} else if (mediumTemperature){
    console.log('Temperatura Moderada')
} else {
    console.log('Temepratura Normal')
}

// Condições Multiplas
//Switch
function calculadora(number1, operador, nunmber2){
    let resultado

    switch (operador){
        case '+':
            resultado = number1 + nunmber2
            break
        case '-':
            resultado = number1 - nunmber2
            break
        case '*':
            resultado = number1 * nunmber2
            break
        case '/':
            resultado = number1 / nunmber2
            break
        default:
            console.log('Operador não Cadastrado!')
            break
    }
    return resultado
}

console.log(calculadora(10, "/", 2))


// Throw - Disparar, lançar
// try - Tentar
// catch - Pegar

function sayMyName ( name = ''){
    if ( name === '' ){
        throw 'Nome é Obrigatório!'
    }
    console.log("depois do erro!")
}

try {
    sayMyName()
} catch (e){
    console.log(e)
}
