// Condicionais Aninhadas
// if - else - else if
let temperatura = 36
let heghTemperature = temperatura >= 39
let mediumTemperature = temperatura < 36 || temperatura >= 38

if (heghTemperature) {
    console.log('Temperatra Critíca')
} else if (mediumTemperature){
    console.log('Temperatura Moderada')
} else {
    console.log('Temepratura Normal')
}

// Condições Multiplas
//Switch\