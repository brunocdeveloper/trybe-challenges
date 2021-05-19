import React, { Component } from 'react';

export default class Phone extends Component {
  render() {
    const { onChange } = this.props;
    return(
      <div>
        <label htmlFor='phone'>
            Phone:
        </label>
        <input
          name='phone'
          id='phone'
          type='number'
          onChange={ onChange }
        />
      </div>
    );
  }
}