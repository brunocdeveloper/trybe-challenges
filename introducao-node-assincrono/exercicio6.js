const fs = require('fs').promises;

async function adicionaNelson() {
  const data = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsonsFamily = await JSON.parse(data); 

  simpsonsFamily.push({ "id": "8", "name": "Nelson Muntz"});

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
  
  return console.log('feito');
}

adicionaNelson();