const btnCorBackground = document.querySelector('.corDeFundo');
const darkTheme = document.querySelector('#darkTheme');
const greenTheme = document.querySelector('#greenTheme');
const yellowTheme = document.querySelector('#yellowTheme');
const artigos = document.querySelectorAll('.tamanhoArtigo')
const tamanhoFonte = document.querySelectorAll('.tamanhoFonte')
const btnTamanho = document.querySelector('.btnTamanho');
const btnColorText = document.querySelector('.btnColorText');
const alturaLinhas = document.querySelector('.alturaLinhas');
const fontFamily = document.querySelector('.fontFamily');

//O evento dispara a função backgroundColor, que altera a cor de fundo da página.
btnCorBackground.addEventListener('change', function (event) {
    backgroundColor(event.target.value);
});

function backgroundColor(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem('corDeFundo', color);
};

//O evento dispara a função aumentarTamanho e aumenta a fonte dos artigos.
btnTamanho.addEventListener('change', function (event) {
    aumentarTamanho(event.target.value);
})

function aumentarTamanho(tamanho) {
    for(let index = 0; index < tamanhoFonte.length ; index +=1){
        tamanhoFonte[index].style.fontSize = tamanho;
    }
    localStorage.setItem('tamanho', tamanho)
}

//O evento dispara a funcação colorizeText e muda a cor dos textos da página.
btnColorText.addEventListener('change', function (event) {
    colorizeText(event.target.value);
})


function colorizeText(colorize) {
    for(let index = 0; index < tamanhoFonte.length; index +=1) {
        tamanhoFonte[index].style.color = colorize;
    }
    localStorage.setItem('corTexto', colorize);
}

//Evento que dispara a função altura para distanciar os paragrafos.
alturaLinhas.addEventListener('change', function (event) {
    altura(event.target.value);
})


function altura(valor) {
    for(let index = 0; index < tamanhoFonte.length; index +=1) {
        tamanhoFonte[index].style.lineHeight = valor;
    }
    localStorage.setItem('altura', valor)
}

//


fontFamily.addEventListener('change', function (event) {
    font(event.target.value);
});

function font(fontText) {
    for(let index = 0; index < tamanhoFonte.length; index +=1) {
        tamanhoFonte[index].style.fontFamily = fontText;
    }
    localStorage.setItem('font', fontText)
}

document.body.style.backgroundColor = localStorage.getItem('corDeFundo');
document.body.style.fontSize = localStorage.getItem('tamanho');
document.body.style.color = localStorage.getItem('corTexto');
document.body.style.lineHeight = localStorage.getItem('altura');
document.body.style.fontFamily = localStorage.getItem('font');