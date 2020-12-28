const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  return names.reduce((acumulator, names) => 
     acumulator + names.split('').reduce((acumulator, names) => {
         if(names === 'a' || names === 'A') 
         return acumulator + 1;
         return acumulator;
     }, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);