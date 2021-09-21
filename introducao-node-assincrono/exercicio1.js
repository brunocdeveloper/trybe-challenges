function calculo(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject('Informe apenas números');

    const calculo = (a + b) *c;

    resolve(calculo)
  });


  return promise;
};

calculo(2, 2, 3)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));