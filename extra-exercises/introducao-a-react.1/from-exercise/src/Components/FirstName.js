import React, { Component } from 'react';

export default class FirstName extends Component {
  render() {
    const { func, value } = this.props;
    return(
      <div>
        <label htmlFor='firstName'>
            First name:
        </label>
        <input 
          id='firstName'
          type='text'
          value={ value }
          onChange={ func }
          name='firstName'
        />
      </div>
    );
  }
}