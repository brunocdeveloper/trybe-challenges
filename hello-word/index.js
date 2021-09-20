const readline = require('readline-sync');

const name = readline.question('Qual o seu nome?: ');
const age = readline.questionInt('Qual a sua idade ?: ');


console.log(`Seu nome é ${name} e sua idade é ${age}`);
