const fs = require('fs');
const { expect } = require('chai');
const sinon = require('sinon');
const avaliacao = require('./exercicio1');
const leArquivo = require('./leArquivo');

const CONTEUDO_DO_ARQUIVO = 'bruno candido morais;';


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
    before(() => {
      sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO);

    })

    after(() => {
      fs.readFileSync.restore();
    })

    describe('A resposta', () => {
      const retorno = leArquivo('arquivo.txt');

      it('é uma string', () => {
        expect(retorno).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        expect(retorno).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  });
});

describe('leArquivo', () => {
  describe('Quando o arquivo não existe', () => {
    before(() => {
      sinon
        .stub(fs, 'readFileSync')
        .throws(new Error('Arquivo não encontrado'));
    })

    after(() => {
      fs.readFileSync.restore();
    })


    describe('A resposta', () => {
      it('é igual a null', () => {
        const retorno = leArquivo('arquivo_não_existente.txt');
        expect(retorno).to.be.equal(null);
      });
    });
  });
});