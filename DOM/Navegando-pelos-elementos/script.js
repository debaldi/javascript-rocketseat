// Navegando pelos Elementos


const el = document.querySelector('body script')
const element = document.querySelector('h1')

// parentNode parentElement         -> Pegando elemento pai
//console.log(el.parentNode)
//console.log(element.parentElement)

// childNodes children              ->Pegando elementos filhos
//console.log(el.childNodes)
//console.log(el.children)

// firstChild firstElementChild     -> Pegando Primeiro Filho
//console.log(el.firstChild)
//console.log(el.firstElementChild)

// lastChild lastElementChild       -> Pegando o Último Filho
//console.log(el.lastChild)
//console.log(el.lastElementChild)

// Buscando Irmãos

// nextSibling nextElementSibling   -> Buscando Proximo Irmão
//console.log(el.nextSibling)
//console.log(el.nextElementSibling)

// previousSibling previousElementSibling -> Buscando Irmão Anterior
console.log(el.previousSibling)
console.log(el.previousElementSibling)