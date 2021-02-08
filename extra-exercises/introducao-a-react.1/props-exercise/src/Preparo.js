import React, { Component } from 'react';

export default class Preparo extends Component {
  render() {
    const { preparo } = this.props;
    return (
      <div>
        <h3>Modo de preparo</h3>
        <p>Passo 1: {preparo.passoUm}</p>
        <p>Passo 2: {preparo.passoDois}</p>
        <p>Passo 3: {preparo.passoTres}</p>
        <p>Passo 4: {preparo.passoQuatro}</p>
      </div>
    );
  }
}