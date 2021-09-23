const fs = require('fs');

function escrever(nomeArquivo, texto) {
  fs.writeFileSync(nomeArquivo, texto);
  return 'Ok';
};

module.exports = escrever;
