// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string
// e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra.
// A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação
// para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função,
// uma nova implementação deve retornar a última letra de uma string.
// A terceira deve receber três strings e concatená-las.

function upperCase(string) {
    return string.toUpperCase()
}

function firstLetter(string) {
    return string.substr(0,1)
}

function concat(stringOne, stringTwo) {
    return `${stringOne}${stringTwo}`
}

describe('Testa as funções upperCase, firstLetter e concat para validar seus retornos', () => {
    it('Testa a função upperCase e seus retornos', () => {
        upperCase = jest.fn()
    
        upperCase.mockImplementation((string => string.toLowerCase()))
        expect(upperCase('BRUNO')).toBe('bruno');
    })
    
    it('testa a função firstLetter e seu retorno', () => {
        firstLetter = jest.fn();
    
        firstLetter.mockImplementation((string) => string.substr(string.length -1))
        expect(firstLetter('bruno')).toBe('o')
    })
    
    it('testa a função concat e seu retorno', () => {
        concat = jest.fn();
    
        concat.mockImplementation((stringOne, stringTwo, stringThree) => `${stringOne}${stringTwo}${stringThree}`);
        expect(concat('Bruno', 'Candido', 'Morais')).toBe('BrunoCandidoMorais')
    })
})
