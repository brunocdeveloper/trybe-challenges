let salarioBruto = 3000;
let inss;
let ir;

if(salarioBruto <= 1556.94){
    inss = salarioBruto * (8/100)
}else if(salarioBruto > 1556.95 && salarioBruto < 2594.92){
    inss = salarioBruto * (9/100)
}else if(salarioBruto>2594.93 && salarioBruto < 5189.82){
    inss = salarioBruto * (11/100)
}else if(salarioBruto > 5189.82){
    inss = 570.88
}

if(salarioBruto > 1903.99 && salarioBruto < 2826.65){
    ir = .75
    parcela= 142.80
}else if(salarioBruto > 2826.66 && salarioBruto < 3751.05){
    ir = .15
    parcela = 354.80
}else if(salarioBruto > 3751.06 && salarioBruto < 4664.68){
    ir = .22
    parcela = 636.13
}
else if(salarioBruto > 4664.68){
    ir = .27
    parcela = 869.36
}

let salarioBase = salarioBruto-inss;
let valorIr = salarioBase*ir;
let salarioLiquido = (salarioBase-valorIr)-parcela;
console.log(salarioLiquido);



