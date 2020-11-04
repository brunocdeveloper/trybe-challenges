let front = [];
let back = [];


function verificaPalindrome(word){
    for(let index = 0; index < word.length; index++){
        front.push(word[index]);
        back.push(word[index]);
    }

    back = back.reverse().join('').replace(' ', '');
    front = front.join('').replace(' ', '');

    if(back == front){
        console.log('True');
    }else{
        console.log('False');
    }
}

verificaPalindrome('arara');

//Os parâmetros .reverse, .join, e .replace foram consultados no Dev Media, Developer.mozilla, e Stack Overflow
//https://pt.stackoverflow.com/questions/102598/inverter-ordem-de-array
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join#:~:text=O%20m%C3%A9todo%20join()%20junta,string%20e%20retorna%20esta%20string.
//https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176#:~:text=Como%20funciona%20o%20replace()%3F,feita%2C%20%C3%A9%20devolvida%20pelo%20m%C3%A9todo.
