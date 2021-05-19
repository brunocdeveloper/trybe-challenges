import React, { Component } from 'react';

export default class Nome extends Component {
  constructor() {
    super();
    this.state = {
        nome: '',
      }

    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event) {
    this.setState({
      nome: event.target.value,
    })
  }

  render() {
    return (
      <label>
        Nome:
        <input onChange={ this.handleChange }></input>
      </label>
    );
  }
}