import React, { Component } from 'react';
import data from '../Data.js'
import '../App.css'

export default class Aula extends Component {
  render() {
    const { match: { params } } = this.props;
    const aula = data.filter(aulas => aulas.id == params.id)[0]
    return (
      <div className='page'>
        <h1>{aula.title}</h1>
        <h3>{aula.desc}</h3>
      </div>
    );
  }
}