// Eventos

const input = document.querySelector('input')
const h1 = document.querySelector('h1')
const evento = document.querySelector('[name="evento"]')


h1.addEventListener('mouseout', print)

h1.addEventListener('click', function() {
    console.log('Outro Evento')
})

function print(){
    console.log('print')
}

input.onkeypress = function(){
    console.log('rodei')
}

// Argumento event
evento.onkeyup = function(event) {
    console.log(event.currentTarget.value)
}
