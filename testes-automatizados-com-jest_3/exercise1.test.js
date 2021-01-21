// Crie uma função que gere um número aleatório entre 0 e 100.
// Você irá criar também os testes para essa função.
// Utilizando o mock, defina o retorno padrão como 10.
// Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

function generateNumber() {
   return Math.floor(Math.random() * 100)
}

it('Testando os retornos e chamada da função', () => {
   generateNumber = jest.fn()
   .mockReturnValue(10);

   generateNumber();
   expect(generateNumber).toHaveBeenCalled();
   expect(generateNumber()).toBe(10);
   expect(generateNumber).toHaveBeenCalledTimes(2)
});