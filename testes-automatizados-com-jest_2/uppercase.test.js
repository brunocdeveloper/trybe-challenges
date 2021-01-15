// Verifica com os testes com jest se o retorno da palavra fica em maiúsculo. 
const uppercase = require('./uppercase');

it(`uppercase 'test' to equal 'TEST'`, (done) => {
    uppercase('test', (str) => {
      expect(str).toBe('TEST');
      done();
    });
});