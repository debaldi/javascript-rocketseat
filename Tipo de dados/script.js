/*
String

    * Cadeia de caracteres
        "" // aspas duplas
        '' // aspas simples
        `` // template literals ou template string  
*/
console.log("aspas duplas")
console.log('aspas "simples".')
console.log(`"template literal" ou 'template string'. `)

/*
Number

    * números
        33 // inteiros
        12.5 // reais - float
        NaN // Not a Number
        Infinity // infinito

*/

console.log(33 + " inteiro")
console.log(12.5 + " reais")
console.log(12.5 / "asdf")
console.log(Infinity)

/*
Boolean

    * somente 2 valores

        true // verdadeiro
        false // falso
*/
console.log(true)
console.log(false)

/*
* undefined
    * indefinido

* null
    * nulo
    * objeto que não possui nada dentro
    * diferente de indefinido
*/
console.log(undefined)
console.log(null)

/*
* object
    * Objeto
    * Propriedades / Atributos
    * Funcionalidades / Métodos
    
{ propriedade: "valor" }
*/
console.log({
    name: "Emerson",
    idade: 34,
    andar: function(){
        console.log("andar")
    }
})

/*
* Array (Vetores)
    * Uma lista
    *  Agrupamento de dados
    
["Emerson", 34]
*/
console.log([
    "Leite",
    "Ovos",
    2,
    3
])

/*
## Tipo Primitivos

    * String
    * Number
    * Boolean
    * undefined
    * Symbol
    * BigInt

## Estruturais

    * Object
        * Array
        * Map
        * Set
        * Date
        * ...
    * Function
*/