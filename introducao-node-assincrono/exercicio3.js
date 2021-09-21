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

imprimePersonagem();
