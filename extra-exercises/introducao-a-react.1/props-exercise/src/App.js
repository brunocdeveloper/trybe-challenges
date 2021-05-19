import React, { Component } from 'react';
import Ingredientes from './Ingredientes';

import PageWithComponents from './PageWithComponents'

const dados = {
  materiaPrima: {
    ovos: '4 ovos',
    acucarMascavo: '4 copos de 200ml de açucar mascavo',
    margarina: '2 colheres de sopa de margarina',
    farinha: '3 copos de 200ml de farinha de trigo',
    achocolatado: '1 copo de 200ml de achocolatado de pó',
    leite: '1/2 copo de leite',
    mel: '2 colheres bem cheia de mel',
    canela: '2 colheres de sopa de canela em pó',
    cravo: '1 colher de sopa de cravo em pó',
    fermento: '1 colher de sopa cheia de fermento em pó',
    chocolate: '1 tablete de chocolate ao leite ou meio amargo',
  },
  preparo: {
    passoUm: 'Bater tudo no liquidificador, deixando para misturar o fermento por último.',
    passoDois: 'Colocar em uma assadeira grande, untada e polvilhada',
    passoTres: 'Assar em forno pré-aquecido por 40 minutos',
    passoQuatro: 'Depois de assada, espalhar o chocolate picado por cima do bolo quente.',
  },
  quantidade: {
    rendimento: '15 pedaços',
  }
};

export default class App extends Component {
  render() {
    return(
      <PageWithComponents materiaPrima={dados.materiaPrima} 
      preparo={dados.preparo} rendimento={dados.quantidade}/>
    );
  }
}
