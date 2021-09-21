const fs = require('fs').promises;

async function filterSimpsons() {
  const data = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = await JSON.parse(data);

  const simpsonsFiltro = simpsons.filter(({ id }) => id !== '6' && id !== '10');

  await fs.writeFile('./simpsons.json', JSON.stringify(simpsonsFiltro));
}


filterSimpsons();