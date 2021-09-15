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

calculoMatematico(15, 15 , 2)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

calculoMatematico(15, 't', 2)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

calculoMatematico(1, 1, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))