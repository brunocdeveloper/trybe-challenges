let string = 'Trybe x aqui!';
let novaString;
const replace = (palavra) => {
    novaString = string.replace("x", palavra);
    console.log(novaString);
}

replace('Bruno');