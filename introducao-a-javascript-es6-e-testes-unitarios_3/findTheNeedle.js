// Escreva a função findTheNeedle para passar nos testes já implementados.
// Implementa função que retorna a posição de uma string dentro um array.
const assert = require('assert');

const findTheNeedle = (array, word) => {
    let output = -1;
    for(index in array){
        if(word === array[index]){
            output = Number(index);
        }
    }
    return output;
}
console.log(findTheNeedle(['house', 'train', 'slide', 'needle', 'book'], 'book'))

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);