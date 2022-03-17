/* Explressões e Operadores

- Expressions
    let number
- Operators
    Binary
        let number = 1
        console.log(number + 1)
    Unary
        let number = 1
        console.log(++number)
    Ternary
        let number = true
        console.log(number ? "verdadeiro" : "Falso")
*/

/* New
    * left-hand-side expression
    * cria um novo objeto
*/
let nome = new String('Emerson')
nome.surNome = "de Baldi"
let age = new Number(34)

console.log(nome.surNome, age)

/*
    Operadores unários
    typeof
    delete
*/
const person = {
    nomeA: 'Emerson',
    idadeA: 34,
}
delete person.age // deletando um propriedade 
console.log(person)

// Operadores Aritméticos
// multiplicação
console.log(3.2 * 5)
// divisão
console.log(10 / 2)
// soma
console.log(10 + 30)
//subtração
console.log(30 - 10)
// resto da divião
console.log(11 % 9)

// incremento ++
let incremento = 0
incremento++ //depois
//++incremento //antes
console.log(incremento)

// decremento
let decremento = 5
decremento-- // depois
//--decremento // antes
console.log(decremento)

// expoencial ou elevado
console.log(3 ** 3) 


// OPERADORES DE COMPARAÇÃO
let one = 1
let two = 2

// ==   igual a
console.log( two == 1 )
console.log( one == "1" )

// !=   diferente de
console.log( one != two )
console.log( one != 1 )
console.log( one != "1" )

// ===  estritamente igual a
console.log( one === "1" )
console.log( one === 1 )

// !==  estritamente diferente de
console.log( two !== "2" )
console.log( two !== 2 )
