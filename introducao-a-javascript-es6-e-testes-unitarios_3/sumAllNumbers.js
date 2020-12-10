// Escreva a função sumAllNumbers para passar nos testes já implementados.
// Soma todos os elementos dentro do array para passar no teste.
const assert = require('assert');

const sumAllNumbers = (parameter) => {
    let sum = 0;
    for(let index = 0; index < parameter.length; index +=1){
        sum += parameter[index];
    }
    return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);