let string = 'Trybe x aqui!';
let novaString;
const replace = (palavra) => {
    novaString = string.replace("x", palavra);
}

replace('Bruno');

let arrayHabilidades = ['resiliência', 'html', 'css', 'javascript', 'git']

const minhasHabilidades = () => {
console.log(`
    ${novaString}
    minhas principais habilidades são:
    ${arrayHabilidades.sort()[0]}
    ${arrayHabilidades.sort()[1]}
    ${arrayHabilidades.sort()[2]}
    ${arrayHabilidades.sort()[3]}
    ${arrayHabilidades.sort()[4]}`)
}

minhasHabilidades();