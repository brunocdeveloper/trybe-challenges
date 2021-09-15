const fs = require('fs').promises;


async function pesquisarId(id) {
  const simpsons = await fs
  .readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => JSON.parse(fileContent));

  const simpsonEscolhido = simpsons.find((simpson) => simpson.id == id);

  if (!simpsonEscolhido) {
    throw new Error('id não encontrado');
  }
  console.log(simpsonEscolhido)
}

async function removerPorId() {
  const simpsons = await fs
  .readFile('./simpson.json', 'utf-8')
  .then((fileContent) => JSON.parse(fileContent));

  const novoArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(novoArray));
}

async function criarNovoDocumento() {
  const simpsons = await fs
  .readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => JSON.parse(fileContent));


  const familiaSimpson = simpsons.filter((simpson) => [1, 2, 3, 4].includes(simpson.id));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(familiaSimpson));
};


async function adicionaNeltonAFamilia() {
  const familiaSimpson = await fs
  .readFile('./simpsonsFamily.json', 'utf-8')
  .then((fileContent) => JSON.parse(fileContent));

  familiaSimpson.push({"id": "8", "name": "Nelson Muntz"});

  await fs.writeFile('./simpsonsFamily.json', familiaSimpson);
};

async function renomearNelson() {
  return fs.readFile('./simpsonsFamily.json', 'utf-8')
  .then((fileContent) => JSON.parse(fileContent))
  .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
  .then((simpsonSemNelson) => simpsonSemNelson.concat([{ id: '8', name: 'Maggie Simpson'}]))
  .then((simpsonComMaggie) => fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonComMaggie)));
}