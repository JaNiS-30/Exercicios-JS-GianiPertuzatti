let person = {
    name: 'Batman',
    power: ''
}

// resolução 1
function run (input){
    person.power = `${input}`
    return person
}

console.log (run('Voar'))

// resolução 2
const poder = function (input) {
    person.power = input
    return person
}

console.log (poder('Força'))