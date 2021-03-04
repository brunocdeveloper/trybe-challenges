import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

export default class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <h1>Navegando com React Router</h1>
        <ul className='nav-links'>
            <li><Link to='/aulas'>Aulas</Link></li>
            <li><Link to='/sobre'>Sobre</Link></li>
        </ul>
      </div>
    );
  }
}