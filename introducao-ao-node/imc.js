
const PESO = 75;
const ALTURA = 1.78;


const calculaIMC = (peso, altura) => (peso / Math.pow(altura, 2)).toFixed(2);

console.log(calculaIMC(PESO, ALTURA));
