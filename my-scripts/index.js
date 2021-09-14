const PESO_70KG = 70;
const ALTURA_1M_75CM = 1.75;

function calculaImc() {
  console.log(`Peso: ${PESO_70KG}, Altura: ${ALTURA_1M_75CM}`);
  const imc = ( PESO_70KG / Math.pow(ALTURA_1M_75CM, 2)).toFixed(2);
  console.log(`IMC: ${imc}`)
}

calculaImc()