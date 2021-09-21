function calculo(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject('Informe apenas números');

    const calculo = (a + b) *c;

    if(calculo < 50) reject('Valor muito baixo');
    if(calculo > 50) resolve(calculo);

  });

  return promise;
};

const numeroRandomico = async () => {

  // poderia ser usado dessa forma const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  const arrayNumerico = [
    Math.floor(Math.random() * 100 +1),
    Math.floor(Math.random() * 100 +1),
    Math.floor(Math.random() * 100 +1)
  ]

  try {
    const result = await calculo(...arrayNumerico);
    console.log(result);

  } catch (err) {
    console.error(err);
  };
  
};

const numerosAleatorios = numeroRandomico();

calculo(15, 2, 3)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

calculo(14, 't', 3)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

calculo(14, 2, 3)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));