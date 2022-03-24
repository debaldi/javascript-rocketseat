/*  Promise

A promessa de que algo irá acontecer, poderá dar certo ou errado, mas ira acontecer

*/

let aceitar = false

console.log('Pedindo Uber')
const promessa = new Promise((resolve, reject) => {
    if(aceitar) {
        return resolve('Pedido aceito!')
    } else{
        return reject('Pedido negado!')
    }
})

promessa
    .then( result => console.log(result))
    .catch( erro => console.log(erro) )
    .finally( () => console.log('Finalizada!') )

console.log('aguardando')