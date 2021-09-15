function calculoMatematico(a, b, c) {
  return new Promise((resolve, reject) => {
    
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      return reject('Informe apenas números')

    const resultado = (a + b) * c

    if (resultado < 50) {
      return reject('Valor muito baixo')
    }
      
    return resolve(resultado)
  })
}

function geradorNumerico() {
  return Math.floor(Math.random() * 100 + 1)
}

async function callCalculoMatematico() {
  const randomNumbers = Array.from({ length: 3}).map(geradorNumerico)
  try {
    const result = await calculoMatematico(...randomNumbers);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

callCalculoMatematico();