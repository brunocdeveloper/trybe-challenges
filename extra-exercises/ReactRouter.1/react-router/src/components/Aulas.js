import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../Data.js'

export default class Aulas extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
         <ul className='aulas'>
           { data.map(aulas => <li key={ aulas.id }><Link to={`${match.url}/${aulas.id}`} className='link'>{ aulas.title }</Link></li>)}
         </ul>
      </div>
    );
  }
}