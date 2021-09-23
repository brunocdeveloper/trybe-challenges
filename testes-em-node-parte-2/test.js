const { expect } = require('chai');
const avaliaNumero = require('./avaliaNumero');

describe('Testa a função avaliaNumero', () => {
  describe('Quando número for maior que 0', () => {
    describe('A resposta é', () => {
      it('é uma string', () => {
        const resposta = avaliaNumero(2);
        expect(resposta).to.be.a('string');
      });

      it('é igual a "positivo"', () => {
        const resposta = avaliaNumero(2);
        expect(resposta).to.be.equals('positivo');
      });
    });
  });
});

describe('Testa a função avaliaNumero', () => {
  describe('Quando número for menor que 0', () => {
    describe('A resposta é', () => {
      it('é uma string', () => {
        const resposta = avaliaNumero(-1);
        expect(resposta).to.be.a('string');
      });


      it('é igual a "negativo"', () => {
        const resposta = avaliaNumero(-1);
        expect(resposta).to.be.equals('negativo');
      });
    });
  });
});

describe('Testa a função avaliaNumero', () => {
  describe('Quando número for igual a 0', () => {
    describe('A resposta é', () => {
      it('é uma string', () => {
        const resposta = avaliaNumero(0);
        expect(resposta).to.be.a('string');
      });

      it('é igual a "neutro"', () => {
        const resposta = avaliaNumero(0);
        expect(resposta).to.be.equals('neutro');
      });
    });
  });
});

describe('Testa a função avaliaNumero', () => {
  describe('Quando o valor digitado não for um número', () => {
    describe('A resposta é', () => {
      it('é igual a "o valor deve ser um número"', () => {
        const resposta = avaliaNumero('t');
        expect(resposta).to.be.equals('o valor deve ser um número');
      });
    });
  });
});

