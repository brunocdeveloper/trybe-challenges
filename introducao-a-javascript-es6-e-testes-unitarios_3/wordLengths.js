// escreva a função wordLengths para passar nos testes implementados.
// Joga o comprimento das strings do array para retornar o expected.
const assert = require('assert');

const wordLengths = (parameter) => {
   const output = [];
   for (let index = 0; index < parameter.length; index +=1){
    output.push(parameter[index].length);
   };
   return output;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

