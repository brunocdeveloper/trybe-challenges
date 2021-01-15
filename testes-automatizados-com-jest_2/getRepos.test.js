// Verifica se o retorno da função são os repositórios esperados.
const getRepos = require('./getRepos');

it('Verifica se o retorno a api é o esperado', () => {
    return getRepos('https://api.github.com/orgs/tryber/repos')
    .then(data => expect(data).toContain('sd-01-week4-5-project-todo-list', 'sd-01-week4-5-project-meme-generator'))
})