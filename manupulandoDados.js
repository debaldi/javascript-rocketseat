/*
    Prototype

    * prototype-based language
    * prototype chain (cadeia)
    * __proto__    
*/

/* TRATAMENTO DE DADOS */

let numberUm = 5
let numberDois = '9'

// Type Conversion (typecasting) - Explicito
console.log(Number(numberDois) + numberUm)

//Type COersion - Implicita, transforma o numberUm em string
console.log(numberDois + numberUm)


/* MANIPULANDO STRING */
let pharse = "Eu estou programando em Javascript"

//Divide uma string em uma lista
let myArray = pharse.split(" ")

// Junta os elementos de um Array
let phraseWithUnderscore = myArray.join("_") 

console.log(phraseWithUnderscore)

// Verifica se tem a palavra no texto
console.log(pharse.includes("Javascript"))

// MANIPULANDO ARRAY
// Criando Array com construtor
let myArrayConstructor = new Array("a", "b", "c")
console.log(myArrayConstructor)


// Contar elementos de um array myArrayLegth
let myArrayLegth = ["2", function(){
    return "Ola"
}, "6"]
// Executando a função dentro do Array
console.log(myArrayLegth[1]())
// Contatndo quantos elementos tem dentro do myArrayLegth
console.log(myArrayLegth.length)

// Transformando uma string em elementos de um Array
let myElement = "Elemento"
console.log(Array.from(myElement))

let techs = ["html", "css", "js"]
// Adicionando um item no fim
techs.push("nodejs")
// Adicionando no começo
techs.unshift("sql")
// removendo do fim
techs.pop()
// removendo do começo
techs.shift()
// pegando somente alguns elementos do Array
console.log(techs.slice(1, 3)) // techs.slice(inicio-0, pegaQuantos-1)
// removendo 1 ou mais items em qualquer posição do Array
techs.splice(1, 2) // techs.splice(inicio-0, retiraQuantos-1)
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')


