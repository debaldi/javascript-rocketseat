
let person = {
    name: 'Emerson',
    age: 34,
    weight: 1.75
}

for (let prop in person){
    console.log(prop)
    // 3 formas de acessar as propriedades de person
    console.log(person["name"])
    console.log(person.name)
    console.log(person[prop])
}