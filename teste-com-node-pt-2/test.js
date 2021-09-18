const { expect } = require('chai');

const verificaNumero = require('./verificaNumero');

describe('Executa a função verificaNumero', () => {
  describe('Quando o número é maior que 0', () => {
    describe('A resposta é', () => {
      it('É "uma string"', () => {
        const resposta = verificaNumero(10);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "positivo"', () => {
        const resposta = verificaNumero(10);

        expect(resposta).to.be.equals('positivo');
      });
    });
  });

  describe('Quando o número é menor que 0', () => {
    describe('A resposta é', () => {
      it('É uma "string"', () => {
        const resposta = verificaNumero(-10);

        expect(resposta).to.be.a('string');
      });

      it('É igual a "negativo"', () => {
        const resposta = verificaNumero(-10);

        expect(resposta).to.be.equals('negativo');
      });
    });
  });


  describe('Quando o número é igual a 0', ()=> {
    describe('A resposta é', () => {
      it('É uma string', () => {
        const resposta = verificaNumero(0);

        expect(resposta).to.be.a('string');
      });

      it('É igual a "neutro"', () => {
        const resposta = verificaNumero(0);

        expect(resposta).to.be.equals('neutro');
      });
    });
  });
})