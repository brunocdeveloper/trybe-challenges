const assert = require('assert')

const palio = ["Palio", "Fiat", 2019]
const shelbyCobra = ["Shelby Cobra", "Ford", 1963]
const chiron = ["Chiron", "Bugatti", 2016]

const toObject = (array) => {
    const [nome, modelo, ano] = array;
    return {name: nome, brand: modelo, year: ano}
}

//Outra forma de resolver o mesmo problema - Gabarito:
/*const toObject = ([name, brand, year]) => ({name, brand, year})*/

assert.deepStrictEqual(toObject(palio), { name: "Palio", brand: "Fiat", year: 2019 })
assert.deepStrictEqual(toObject(shelbyCobra), { name: "Shelby Cobra", brand: "Ford", year: 1963 })
assert.deepStrictEqual(toObject(chiron), { name: "Chiron", brand: "Bugatti", year: 2016 })