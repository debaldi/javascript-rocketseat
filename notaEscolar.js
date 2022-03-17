/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C D F

* de 90 para cima   -   A
* entre 80 - 89     -   B
* entre 70 - 79     -   C
* entre 60 - 69     -   D
* menor que 60      -   F

*/

let score = 59

if ( score >= 90 ){
    console.log("A")
} else if ( score >= 80){
    console.log("B")
} else if ( score >= 70){
    console.log("C")
} else if ( score >= 60){
    console.log("D")
} else {
    console.log("F")
}