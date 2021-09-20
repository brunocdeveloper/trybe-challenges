const readline = require('readline-sync');

const calculaIMC = (peso, altura) => (peso / Math.pow(altura, 2)).toFixed(2);

const peso = readline.questionFloat('Qual o seu peso? : ');
const altura = readline.questionFloat('Qual a sua altura? : ');
const imc = calculaIMC(peso, altura);

console.log(`O seu imc é ${imc}`);
