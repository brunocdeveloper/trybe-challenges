let peca = 'cavalo';
peca.toLowerCase();

if(peca == 'peão'){
    console.log('move uma casa a frente')
}
else if(peca == 'cavalo'){
    console.log('move duas casas a frente e depois uma ao lado, como se fizesse a letra L no tabuleiro')
}else if(peca == 'bispo'){
    console.log('pode mover na diagonal, vertical e horizontal')

}else if(peca == 'torre'){  
    console.log('move em direção a vertical e horizontal')
}else if(peca == 'rei'){
    console.log('pode mover em qualquer direção a sua volta, mas uma casa por vez')
}else{
    console.log('peça inválida')
}


