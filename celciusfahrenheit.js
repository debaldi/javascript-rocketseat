/*
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

function convertion( temp, graus) {
    let result

    if ( temp === 'C' ) {
        let F = graus * 9/5 + 32
        result = F
    } else {
        let C = (graus - 32) * 5/9 
        result = C
    }
    
    return result
}


console.log(convertion('F',89.6))