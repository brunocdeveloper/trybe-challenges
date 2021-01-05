const { it, expect } = require('@jest/globals');
const myFizzBuzz = require('./myFizzBuzz');

describe('Verifica se os a função está retornando a legenda correta', () =>{
    it('Verifica se o retorno para 3 e 5 é fizzbuzz', () => {
        expect(myFizzBuzz(30)).toBe('fizzbuzz');
    })

    it('Verifica se o retorno para 3 é fizz', () => {
        expect(myFizzBuzz(9)).toBe('fizz')
    })

    it('Verifica se o retorno para 5 é buzz', () => {
        expect(myFizzBuzz(10)).toBe('buzz')
    })

    it('Verifica o retorno para número não divisível por 3 e 5', () => {
        expect(myFizzBuzz(19)).toBe(19)
    })

    it('Verifica retorno para string', () => {
        expect(myFizzBuzz('Bruno')).toBe(false)
    })
})