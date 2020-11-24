const fatorial = (numero) => {
    let multiplicação = 1;
    for(let index = 1; index <= numero; index +=1){
        multiplicação *= index
    }
    console.log(multiplicação);
}
fatorial(5);