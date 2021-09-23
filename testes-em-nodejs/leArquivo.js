const fs = require('fs');

function leArquivo(nomeArquivo) {
  try {
    const conteudoArquivo = fs.readFileSync(nomeArquivo, 'utf-8');
    return conteudoArquivo;
  } catch (err) {
    return null;
  };
};

module.exports = leArquivo;
