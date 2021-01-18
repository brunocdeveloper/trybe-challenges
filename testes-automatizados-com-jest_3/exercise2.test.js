// Com a mesma função do exercício anterior, utilizando o mock,
// crie uma nova implementação, que deve receber dois parâmetros e
// retornar a divisão do primeiro pelo segundo.
// Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

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

    generateNumber.mockReset()
    generateNumber.mockImplementation((a, b) => a / b);
    generateNumber(10, 5);
    expect(generateNumber(10, 5)).toBe(2);

 });