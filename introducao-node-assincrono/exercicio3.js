const fs = require('fs').promises;

async function imprimePersonagem() {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const dataP = JSON.parse(data);
    dataP.map(({id, name}) => console.log(`${id} - ${name}`));
  } catch (err) {
    console.error(err);
  };
};


async function buscaPorId(idPersonagem) {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const dataP = JSON.parse(data);

  const filtro = dataP.filter(({ id }) => id  == idPersonagem)
  if(filtro.length == 0 ) throw new Error('Id não encontrado');
 
  console.log(filtro);
};

buscaPorId(5);

