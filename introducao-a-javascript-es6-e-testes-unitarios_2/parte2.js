const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const adicionaTurno = (objeto, chave, valor) => {
    objeto[chave] = valor;
}

adicionaTurno(lesson2, "turno", "manhã");

const listarKeys = (objeto) => {
    console.log(Object.keys(objeto));
}

listarKeys(lesson3);

const tamanhoObjeto = (objeto) => {
    console.log(Object.keys(objeto).length)
}

tamanhoObjeto(lesson3);
