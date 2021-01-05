const { test, expect, it } = require('@jest/globals');
const sum = require('./sum');

describe('Verifica o retorno da função sum', () => {
    it('Verifica se a soma de 4 + 5 retorna 9', () => {
      expect(sum(4, 5)).toBe(9);
    });

    it('retorna erro se o parâmetro for string', () => {
        expect(()=> {
            sum(4, '5');
        }).toThrow();
    })

    it('verifica se o retorno de 0 +0 = 0', () => {
        expect(sum(0, 0)).toBe(0);
    });

    it('verifica se retorna mensagem de erro para string', () => {
        expect(() =>{
            sum(4, '5')
        }).toThrow('parameters must be numbers')
    })
});

