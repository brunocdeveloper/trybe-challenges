const readline = require('readline-sync');

const peso = readline.questionInt('Qual o seu peso ?: ');
const altura = readline.questionFloat('Qual a sua altura ?: ');

function calculaImc() {
  console.log(`Peso: ${peso}, Altura: ${altura}`);
  const imc = ( peso / Math.pow(altura, 2)).toFixed(2);
  console.log(`IMC: ${imc}`)
}

calculaImc()