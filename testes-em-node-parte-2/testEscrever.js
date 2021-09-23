const fs = require('fs');

const { expect } = require('chai');
const sinon = require('sinon');

const escrever = require('./escrever');




describe('Testa a função escrever', () => {
  before(() => {
    sinon
      .stub(fs, 'writeFileSync')
  })

  after(() => {
    fs.writeFileSync.restore();
  })

  describe('Quando a resposta é', () => {
    it('é uma string', () => {
      const resposta = escrever('primeiroArquivo.txt', 'Primeiro texto');

      expect(resposta).to.be.a('string');
    });

    it('é igual a "Ok"', () =>{
      const resposta = escrever('primeiroArquivo.txt', 'Primeiro texto');

      expect(resposta).to.be.equals('Ok');
    });
  });
});

