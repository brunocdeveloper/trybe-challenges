const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
};

//Teste se o retorno de sum(4,5) é 9.
assert.equal(sum(4, 5), 9, '4 + 5 é igual a 9');

//Teste se o retorno de sum(0, 0) é 0.
assert.equal(sum(0, 0), 0, '0 + 0 é igual a 0');

//Teste se a função sum lança um erro quando os parametros são 4 e "5" (sendo 5 uma string).
assert.strictEqual(sum(4, '5'), 9, '5 não é um número');
