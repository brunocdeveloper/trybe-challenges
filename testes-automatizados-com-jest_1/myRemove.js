// Cria uma função que recebe um array e retorna uma cópia desse array sem o elemento item.
const myRemove = (arr, item) => arr.filter((element) => element !== item)
  
module.exports = myRemove;