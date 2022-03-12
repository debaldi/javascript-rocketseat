
// const e let são locais e só funcionam no escopo onde foi criado
{
    let a = 0
    console.log('let somente dentro do escopo -', a)
}

// se declarar let fora do escopo pode ser atualizado com outro valor dentro do escopo
let b = 0
{
    b = 1
    console.log('Atualizando let dentro do escopo -', b)
}

// const não pode ser alterado nem dentro e nem fora do escopo
const c = 1
{    
    console.log('const fora do escopo -', c)
}

{   const d = 0
    console.log('const dentro do escopo -', d)
}