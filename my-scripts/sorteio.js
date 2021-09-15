const readline = require('readline-sync');

function jogoDeAdivinhacao() {
  const numero = readline.questionInt('Digite um número entre 0 e 10: ');
  const min = Math.ceil(0);
  const max = Math.floor(10)
  const gerador = Math.floor(Math.random() * (max - min +1 )) + min;
  if (numero === gerador) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Opa, não foi dessa vez. O número sorteado foi ${gerador}`)
  }
}

jogoDeAdivinhacao();
