const fs = require('fs').promises;

async function replaceNelson() {
  const data = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsonsFamily = await JSON.parse(data); 

  const filterSimpsons = simpsonsFamily.filter(({ id }) => id !== '8')
  
  const newArraySimpsons = filterSimpsons.concat([{id: '8', name: 'Maggie Simpson'}]);

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newArraySimpsons));
}

replaceNelson();