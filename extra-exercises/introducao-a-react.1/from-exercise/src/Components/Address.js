import React, { Component } from 'react';

export default class Address extends Component {
  render() {
    const { onChange } = this.props;
    return(
      <div>
        <label htmlFor='adress'>
            Address:
        </label>
        <input
          name='address'
          id='address'
          type='text'
          onChange={ onChange }
        />
      </div>
    );
  }
}