// Verifica com os testes com jest se o retorno da palavra fica em maiúsculo. 
const uppercase = (str, callback) => {
    callback(str.toUpperCase());
}

module.exports = uppercase;