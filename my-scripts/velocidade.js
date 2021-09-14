const readline = require('readline-sync');


function velocidadeMedia() {
  const distancia_metros = readline.questionFloat('Qual a distancia em KM ?: ');
  const tempo_segundos = readline.questionFloat('Qual é o tempo ?: ');
  

  console.log((distancia_metros / tempo_segundos).toFixed(2));
};

velocidadeMedia();