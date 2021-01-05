const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

// escreva filterPeople abaixo
//Solução abaixo usando apenas o filter
/*const filterPeople = () => {
  return  people.filter((folks) => folks.nationality === "Australian")
  .filter((folks)=> folks.bornIn >= 1901 && folks.bornIn <= 2000)
}*/

//Solução usando object destructuring do gabarito
const bornIn20century = year => year >= 1901 && year <= 2000
const isAustralian = nationality => nationality === "Australian"

const filterPeople = (people) => people.filter(({ bornIn, nationality }) => bornIn20century(bornIn) && isAustralian(nationality))


const filteredPeople = filterPeople(people) 

assert.deepStrictEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepStrictEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })