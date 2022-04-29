// Manipulando Conteúdo
const element = document.querySelector('#textoHtml')
const elementInput = document.querySelector('input')
const elementDiv = document.querySelector('div')


console.log("------ USANDO innerHtml ------");
console.log(element.innerHTML)

console.log("------ USANDO innerText ------");
console.log(element.innerText)

console.log("------ USANDO textContent ------");
console.log(element.textContent)

console.log("------ USANDO value ------");
console.log(elementInput.value)
elementInput.value = 'Valor do JS'



console.log("------ USANDO Atributos ------");
elementDiv.setAttribute('id', 'esposa')     // Adicionando id na div
elementDiv.setAttribute('class', 'amor')    // Adicionando class na div

console.log(elementDiv.getAttribute('id'))  // Pegando o atributo id da div

elementDiv.removeAttribute('class')         // Removendo a class da div

console.log(elementDiv)




/*
    innerHTML
    Retorna o HTML, as tags e o texto, que não estiver oculto.

    innerText
    Retorna o texto e o CSS do elemento, ignora todas as tags HTML.

    textContent
    Funciona de forma semelhante ao innerHTML, porem retorna o conteúdo de texto até o que esta oculto.

    value
    Pode ser alterado pelo JS ou pode simplismente pegar o valor que já esta inserido na tag input no value

*/