import React, { Component } from 'react';

export default class Rendimento extends Component {
  render() {
    const { quantidade } = this.props;
    return (
        <div>
        <h3>O Bolo pão de mel é uma ótima receita para aniversários</h3>
        <p>Essa receita rende em média { quantidade.rendimento }.</p>
        </div>
    );
  }
}