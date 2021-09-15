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

calculoMatematico(
  geradorNumerico(),
  geradorNumerico(),
  geradorNumerico()
)
.then(resolve => console.log(resolve))
.catch(error => console.log(error))