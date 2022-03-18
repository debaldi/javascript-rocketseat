/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C D F

* de 90 para cima   -   A
* entre 80 - 89     -   B
* entre 70 - 79     -   C
* entre 60 - 69     -   D
* menor que 60      -   F

*/

function getScore ( score ) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal;

    if ( scoreA ){    
        scoreFinal = "A"
    } else if ( scoreB ){
        scoreFinal = "B"
    } else if (scoreC ){
        scoreFinal = "C"
    } else if ( scoreD ){
        scoreFinal = "D"
    } else if ( scoreF ) {
        scoreFinal = "F"
    } else {
        scoreFinal = 'Nota não permitida!'
    }

    return scoreFinal
}
console.log(getScore(90))
console.log(getScore(89))
console.log(getScore(80))
console.log(getScore(79))
console.log(getScore(70))
console.log(getScore(69))
console.log(getScore(60))
console.log(getScore(59))
console.log(getScore(0))
console.log(getScore(-1))
console.log(getScore(101))
