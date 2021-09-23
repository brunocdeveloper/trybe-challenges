const aprovacao = require('./exercicio1');

const media = aprovacao(4);

console.log('Quando a média for menor que 7 retorna "Reprovado"');

if(media == 'Aprovado') {
  console.log('Ok');
} else {
  console.error('Resposta não esperada');
};

console.log('Quando a média for maior que 7 retorna "Aprovado"');

if(media == 'Aprovado') {
  console.log('Ok');
} else {
  console.error('Resposta não esperada');
};

console.log('Quando a média for igual a 7 retorna "aprovado"');

if(media == 'Aprovado') {
  console.log('Ok');
} else {
  console.error('Resposta não esperada');
};
