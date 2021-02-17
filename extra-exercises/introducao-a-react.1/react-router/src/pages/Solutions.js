import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Solutions extends Component {
  render() {
    const { availableSolutions } = this.props;
    return (
      <section>
        <ul>
          {availableSolutions.map(solution => (
            <li key={solution}>
              <Link to={ `/solutions/${solution}` }>{solution}</Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}