import React, { Component } from 'react';

export default class Ingredientes extends Component {
  render() {
    const { ingredientes } = this.props;
    return (
        <div>
            <h3>Essa é uma deliciosa receita de bolo pão de mel</h3>
            <h4>Ingredientes</h4>
            <p>Você irá de precisar de:</p>
            <p>{ingredientes.ovos}</p>
            <p>{ingredientes.acucarMascavo}</p>
            <p>{ingredientes.margarina}</p>
            <p>{ingredientes.farinha}</p>
            <p>{ingredientes.achocolatado}</p>
            <p>{ingredientes.leite}</p>
            <p>{ingredientes.canela}</p>
            <p>{ingredientes.cravo}</p>
            <p>{ingredientes.fermento}</p>
            <p>{ingredientes.chocolate}</p>
        </div>
    );
  }
}