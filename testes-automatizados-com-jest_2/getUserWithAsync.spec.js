// Repete os passos do exercício 3, mas utilizando async/await.
const getUserName = require('./getUserName');

describe('Verifica o retorno da função getUserName', () => {
    it('Verifica o retorno para quando o usuário é encontrado', async () => {
        expect.assertions(1);
        const data = await getUserName(4);
        expect(data).toEqual('Mark')
    });
    
    it('Verifica o retorno para quando o usuário não é encontrado', async () => {
        expect.assertions(1);
        try {
          await getUserName(1);
        } catch (error) {
            expect(error).toEqual({ error: 'User with 1 not found.' })
        }
    });
})

