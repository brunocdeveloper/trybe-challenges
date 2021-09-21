function calculo(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject('Informe apenas números');

    const calculo = (a + b) *c;

    if(calculo < 50) reject('Valor muito baixo');
    if(calculo > 50) resolve(calculo);

  });


  return promise;
};

calculo(14, 2, 3)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));