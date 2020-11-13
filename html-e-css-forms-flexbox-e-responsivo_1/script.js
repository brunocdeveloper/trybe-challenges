let arrayEstados = ["AC", "AL", "AP", "AM", "BA", "CE", "ES", "GO", "MA", "MT", "MS", "PA", "PB", "PR", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "SC", "SP", "SE", "TO", "DF"];
let estados = document.getElementById('selectEstados');
let btnSubmit = document.getElementById('btnSubmit');

for (let index = 0; index < arrayEstados.length; index +=1){
    let option = document.createElement('option');
    option.innerText = arrayEstados[index];
    option.value = arrayEstados[index];
    estados.appendChild(option);
}

function preventDefault(){
    btnSubmit.addEventListener('click', function(event){
        event.preventDefault();
    })
}

