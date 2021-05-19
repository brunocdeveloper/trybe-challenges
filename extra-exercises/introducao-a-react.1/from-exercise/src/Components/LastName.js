import React, { Component } from 'react';

export default class LastName extends Component {
  render() {
    const { func, value } = this.props;
    return(
      <div>
        <label htmlFor='lastName'>
            Last name:
        </label>
        <input
          name='lastName'
          id='lastName'
          type='text'
          onChange={ func }
          value={ value }
        />
      </div>
    );
  }
}