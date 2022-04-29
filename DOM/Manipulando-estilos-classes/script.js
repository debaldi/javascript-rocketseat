// Alterando estilos

const element = document.querySelector('body')
const h1 = document.querySelector('h1')

element.style.backgroundColor = "#0000FF";
console.log(element.style.backgroundColor)

h1.classList.add('active')
h1.classList.add('cor')

h1.classList.toggle('active')
console.log(h1.classList)
