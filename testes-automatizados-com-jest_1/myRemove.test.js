// Cria uma função que recebe um array e um número e retorna um array sem esse número.
const { test, expect } = require('@jest/globals');
const { not } = require('expect');
const myRemove = require('./myRemove');

describe('verifica o retorno da função myRemove', () => {
  it('verifica se retorna array sem o item', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('verifica se não retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4])).not.toEqual()
  })

  it('verifica se o array não recebeu alteração', () => {
    const array = [1, 2, 3, 4];
    myRemove(array, 1);
    expect(array).toEqual([1, 2, 3, 4])
  })

  it('Verifica se retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
});