import React, { Component } from 'react';

import Ingredientes from './Ingredientes';
import Preparo from './Preparo';
import Rendimento from './Rendimento'

export default class PageWithComponents extends Component {
  render() {
    const { materiaPrima, preparo, rendimento } = this.props;
    return(
      <div>
       <Ingredientes ingredientes={ materiaPrima } />
       <Preparo preparo={ preparo }/>
       <Rendimento quantidade={ rendimento } />
      </div>
    );
  }
}

