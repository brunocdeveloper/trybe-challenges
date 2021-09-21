const fs = require('fs').promises;

async function criarNovoArquivo() {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = await JSON.parse(data); 

  const simpsonsFamily = await simpsons.filter(({id}) => ['1','2','3','4'].includes(id))
  
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

criarNovoArquivo();