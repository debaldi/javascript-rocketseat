/*
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

// transformDegree('50F')
function transformDegree(degree) {
    const celciusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if ( !celciusExists && !fahrenheitExists ){
        throw new Error('Grau não identificado!')
    }

    // fluxo ideal, F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F",""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9 
    let degreeSign = 'C'
    
    // fluxo alternativo C -> F
    if ( celciusExists ) {
        updateDegree = Number(degree.toUpperCase().replace("C",""))
        formula = (celcius) => celcius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updateDegree) + degreeSign
    
}

try {
    // Fahrenheit para Celcius
    console.log(transformDegree('100.4F'))
    // Celcius para Fahrenheit
    console.log(transformDegree('38C'))
    // Grau Errado
    console.log(transformDegree('50Z'))
} catch (error) {
    console.log(error.message)    
}