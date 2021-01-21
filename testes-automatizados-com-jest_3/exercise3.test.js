// Ainda com a mesma função do primeiro exercício,
// utilizando o mock, crie uma nova implementação que receba três parâmetros
// e retorne sua multiplicação. Após fazer os devidos testes para ela,
// resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro.


function generateNumber() {
    return Math.floor(Math.random() * 100);
 }
 
 it('Testando os retornos e chamada da função', () => {
    generateNumber = jest.fn()
    .mockReturnValue(10);
 
    generateNumber();
    expect(generateNumber).toHaveBeenCalled();
    expect(generateNumber()).toBe(10);
    expect(generateNumber).toHaveBeenCalledTimes(2);

    generateNumber.mockReset();
    generateNumber.mockImplementation((a, b) => a / b);
    expect(generateNumber(10, 5)).toBe(2);

    generateNumber.mockReset();
    generateNumber.mockImplementation((a, b, c) => a *b * c);
    expect(generateNumber(2, 2, 2)).toBe(8);

    generateNumber.mockReset();
    generateNumber.mockImplementation((number) => number * 2);
    expect(generateNumber(2)).toBe(4);

 });