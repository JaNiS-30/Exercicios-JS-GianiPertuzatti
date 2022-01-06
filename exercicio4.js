// resolução 1
let json = '{"name":"Batman"}'

function run(entrada){
const arquivo = JSON.parse(entrada)

arquivo.name = "Superman"

return json = JSON.stringify(arquivo)
}

//console.log (run(json))

// resolução 2
let json2 = {}

const jsonAcessConvert = function (input)  {
    for (let [key, value] of Object.entries(JSON.parse(input))) {
        if(key == "name"){
            value = "Superman"
        }
        json2[key] = value
    }
    return JSON.stringify(json2)
}

//console.log (jsonAcessConvert(json))