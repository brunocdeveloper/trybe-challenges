import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className='Header'>
        <img src='' alt='trybe-logo'/>
        <h4>Curso</h4>
        <nav>
          <Link to='/calendar'>Agenda</Link>
          <Link to='/live-lectures'>Aulas ao vivo</Link>
          <Link to='/trybe-talks'>Trybe Talks</Link>
          <Link to='/solutions'>Gabaritos</Link>
        </nav>
      </header>
    );
  }
}