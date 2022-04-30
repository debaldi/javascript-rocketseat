// Criando e Adicionando Elementos

//createElement -> criando elementos
const div = document.createElement('div');
div.innerHTML = "Emerson"

// append(depois do ultimo filho) prepend(antes do primeiro filho) -> adicionando elementos
//const body = document.querySelector('body')
//body.append(div)
//body.prepend(div)

// insertBefore -> inserir Antes da tag
// .insertBefore(tagNova, AntesDaTag)
const body = document.querySelector('body')
const script = document.querySelector('body header')
body.insertBefore(div, script)