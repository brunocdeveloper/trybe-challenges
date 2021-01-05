// Cria uma função que soma números e retorna erro caso receba string como parâmetro.
const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
};

module.exports = sum;
