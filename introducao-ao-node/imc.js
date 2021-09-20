const readline = require('readline-sync');

const calculaIMC = (peso, altura) => (peso / Math.pow(altura, 2)).toFixed(2);

const peso = readline.questionFloat('Qual o seu peso? : ');
const altura = readline.questionFloat('Qual a sua altura? : ');
const imc = calculaIMC(peso, altura);

console.log(`O seu imc é ${imc}`);

const situacaoIMC = () => {
  if(imc < 18.5) {
    console.log('Abaixo do peso (magreza)');
  };
  if(imc > 18.5 && imc < 24.9) {
    console.log('Peso normal');
  };
  if(imc > 25.0 && imc < 29.9) {
    console.log('Acima do peso (sobrepeso)');
  };
  if(imc > 30.0 && imc < 34.90) {
    console.log('Obesidade grau I');
  };
  if(imc > 35.0 && imc < 39.90) {
    console.log('Obesidade grau II');
  };
  if(imc >= 40) {
    console.log('Obesidade graus III e IV');
  };
};

situacaoIMC();