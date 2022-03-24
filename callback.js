// Função aceita qualquer tuoi de dado como argumento

function imprimirDado(dado) {
    console.log('Antes do Callback')

    console.log( dado() )
    
}

imprimirDado( 
    function(){
        return 'Callback'
    }
)

console.log('Depois do Callback')
console.log('-------------------------------------------------------')

// Conectando API com HTTPS e Callback
const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'

https.get(API, res => {
    console.log(res.statusCode)
})
console.log('Conectando API')