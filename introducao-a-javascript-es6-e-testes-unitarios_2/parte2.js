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

const listarValores = (objeto) => {
    console.log(Object.values(objeto))
}

listarValores(lesson3)


const allLessons = Object.assign({}, {lesson1, lesson2, lesson3} );
console.log(allLessons)

const contaEstudantes = () => {
    let lesson1 = Object.values(allLessons.lesson1)[1]
    let lesson2 = Object.values(allLessons.lesson2)[1]
    let lesson3 = Object.values(allLessons.lesson3)[1]
    console.log(lesson1 + lesson2 + lesson3)
}

contaEstudantes();

const valorChave = (objeto, posicao) => {
    console.log(Object.values(objeto)[posicao])
}

valorChave(lesson2, 2)