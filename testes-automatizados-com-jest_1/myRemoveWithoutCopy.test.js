// myRemoveWithoutCopy.test.js
const { expect } = require('@jest/globals');
const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('myRemoveWithoutCopy', () => {
  it('retorna o próprio array sem o elemento item caso ele exista no array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('verifica se o retorno do array é o esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('verifica se o array passado como parâmetro não sofreu alteração', () => {
    const arr = [1, 2, 3, 4];
    myRemoveWithoutCopy(arr, 1);
    expect(arr).toEqual([2, 3, 4]);
  });

  it('verifica se a chamada retorna o array esperado', () => {
      expect(myRemoveWithoutCopy([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  })
});