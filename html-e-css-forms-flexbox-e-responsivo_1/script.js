let arrayEstados = ["AC", "AL", "AP", "AM", "BA", "CE", "ES", "GO", "MA", "MT", "MS", "PA", "PB", "PR", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "SC", "SP", "SE", "TO", "DF"];
let estados = document.getElementById('selectEstados');
let btnSubmit = document.getElementById('btnSubmit');
let div = document.createElement('div');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let endereco = document.querySelector('#endereco');
let cidade = document.querySelector('#cidade');
let cpf = document.querySelector('#cpf');
let estado = document.querySelector('#estado');
let empresa = document.querySelector('#empresa');
let cargo = document.querySelector('#cargo');

for (let index = 0; index < arrayEstados.length; index +=1){
    let option = document.createElement('option');
    option.innerText = arrayEstados[index];
    option.value = arrayEstados[index];
    estados.appendChild(option);
}

function preventDefault(){
    btnSubmit.addEventListener('click', function(event) {
        document.querySelector('#imprimirName').innerHTML = name.value;
        document.querySelector('#imprimirEmail').innerHTML = email.value;
        document.querySelector('#imprimirEndereco').innerHTML = endereco.value;
        document.querySelector('#imprimirCidade').innerHTML = cidade.value;
        document.querySelector('#imprimirCPF').innerHTML = cpf.value;
        document.querySelector('#imprimirEmpresa').innerHTML = empresa.value;
        document.querySelector('#imprimirCargo').innerHTML = cargo.value;
        event.preventDefault();
    });
};

preventDefault();
