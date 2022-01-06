// resolução 1
function run(input) {
    if (input === "carro") {
        return true
    } else {
        return false
    }
}

// resolução 2
const verifExpressao = function (input) {return input === "carro" ? true : false}

// resolução 3
const verifArrow = (input) => {
    if (input !== "carro") {
        return false
    } else {
        return true
    }
}

console.log(run("carro"))
console.log(run("car"))

console.log(verifExpressao("carro"))
console.log(verifExpressao("car"))

console.log(verifArrow("carro"))
console.log(verifArrow("car"))