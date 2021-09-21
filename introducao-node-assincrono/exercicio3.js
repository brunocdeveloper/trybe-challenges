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
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const dataP = JSON.parse(data);
    const filtro = dataP.filter(({ id }) => id  == idPersonagem)
    console.log(filtro);
  } catch (err) {
    console.error(`Id não encontrado: ${err}`);
  };
};

buscaPorId(11);

