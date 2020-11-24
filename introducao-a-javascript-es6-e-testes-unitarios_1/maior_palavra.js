let palavras;
let maior = "";
const maiorPalavra = (palavra) => {
    palavras = palavra.split(" ");
    for (word of palavras) {
        if (word.trim().length > maior.length) {
            maior = word.trim();      
        }
    }
    console.log(maior);
}

maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu");