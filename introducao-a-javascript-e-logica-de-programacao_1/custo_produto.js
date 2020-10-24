let custo = 200;
let venda = 350;
let imposto = 0.2;
let custoTotal = custo*imposto+custo;
let lucro = venda-custoTotal

if(custo < 0 || venda < 0){
    console.log('Valor inválido')
}else{
    console.log(lucro)
}
