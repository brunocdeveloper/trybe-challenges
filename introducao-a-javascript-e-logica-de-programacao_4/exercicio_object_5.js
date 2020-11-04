let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
  }

let newInfo = {
    personagem: "Tio Patinhas",
    origem: "christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
}

for(let index in info, newInfo){
    if(info[index] === newInfo[index]){
      console.log("Ambos recorrentes"    )
    }else{
        console.log(info[index] + ' e ' + newInfo[index])
    } 
}