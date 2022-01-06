let person = {
    name: 'Batman',
    power: '',
}

// resolução 1
function run (power, carac){
    person.power = `${power}`
    person.carac = `${carac}`
    return `O ${person.name} tem o poder de ${person.power} e ${person.carac}`
}

console.log (run('força', 'inteligência'))

// resolução 2
const poderCarac = function (power, carac) {
    person.power = power
    person.carac = carac
    return 'O ' + person.name + ' tem o poder de ' + person.power + ' e ' + person.carac
}

console.log (poderCarac('inteligência','força'))