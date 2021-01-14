// Verifica se o retorno para quando encontra o úsuario ou não é o esperado.
const getUserName = require('./getUserName')

it('Verifica o retorno para quando o usuário é encontrado', () => {
    expect.assertions(1);
    return getUserName(4).then(data => expect(data).toEqual('Mark'));
})

it('Verifica o retorno para quando o usuário não é encontrado', () => {
    expect.assertions(1);
    return getUserName(2).catch(error => 
      expect(error).toEqual({ error: 'User with 2 not found.' }))
})
