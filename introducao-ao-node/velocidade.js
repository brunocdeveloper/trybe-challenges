const readline = require('readline-sync');

const velocidadeMedia = (distancia, tempo) => distancia/ tempo;

const distancia = readline.questionFloat('Qual a distância ?: ');
const tempo = readline.questionFloat('Qual o tempo? :');

const resultado = velocidadeMedia(distancia, tempo).toFixed(2);

console.log(`A velocidade média é ${resultado} km/h`);
