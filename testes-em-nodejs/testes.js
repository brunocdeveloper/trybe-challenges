const { expect } = require('chai');
const avaliacao = require('./exercicio1');
const leArquivo = require('./leArquivo');

describe('Quando a média for menor que 7', () => {
  it('retorna "Reprovado"', () => {
    const resposta = avaliacao(4);
    expect(resposta).equals('Reprovado');
  });
});

describe('Quando a média for maior que 7', () => {
  it('retorna "Aprovado"', () => {
    const resposta = avaliacao(9);
    expect(resposta).to.be.equals('Aprovado');
  });
});

describe('Quando a média for igual a 7', () => {
  it('retorna "Aprovado"', () => {
    const resposta = avaliacao(7);
    expect(resposta).to.be.equals('Aprovado');
  });
});


describe('leArquivo', () => {
  describe('Quando o arquivo existe', () => {
    describe('A resposta', () => {
      it('é uma string', () => {
        const retorno = leArquivo('arquivo.txt');
        expect(retorno).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        const retorno = leArquivo('arquivo.txt');
        expect(retorno).to.be.equals('bruno candido morais;');
      });
    });
  });
});

describe('leArquivo', () => {
  describe('Quando o arquivo não existe', () => {
    describe('A resposta', () => {
      it('é igual a null', () => {
        const retorno = leArquivo('arquivo_não_existente.txt');
        expect(retorno).to.be.equal(null);
      });
    });
  });
});