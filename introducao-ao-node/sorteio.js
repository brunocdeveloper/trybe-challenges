const readline = require('readline-sync');


const geradorNumerico = () => {
  
  const numero = readline.questionInt('Digite um número de 0 a 10: ');
  const numeroAleatorio = (Math.random() * 10).toFixed(0);

  if(numeroAleatorio == numero) {
    console.log('Parabéns, número correto!');
  };
  if(numeroAleatorio !== numero) {
    console.log(`Opa, não foi dessa vez. O número era ${numeroAleatorio}`);
  };

  const jogarNovamente = readline.question('Deseja jogar novamente ? (digite s para sim qualquer coisa para não: ');
  
  if(jogarNovamente !== "s") return console.log('até a próxima');

  geradorNumerico();
}

geradorNumerico();
