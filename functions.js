// function expression
// function anonymous

// parâmetros (parameters)
const sum = function(number1, number2){
    console.log(number1 + number2)
}

sum(2, 3) //agruments (argumentos)


// sempre delcarar let dentro da function (let total)
const sum2 = function(number3, number4){
    let total = number3 + number4
    return total
}

let number3 = 20
let number4 = 10

console.log(sum2(number3, number4))


// function hoisting (elevação)
sayMyName()

function sayMyName() {
    console.log('Emerson')
}

// arrow function
const myName = (name) => {
    console.log(name)
}

myName('Emerson de Baldi')