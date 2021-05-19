import React, { Component } from 'react';

export default class OcupationArea extends Component {
  render() {
    const { onChange } = this.props;
    return(
      <div>
        <label htmlFor='textarea'>
            Occupation area:
        </label>
        <textarea id='textarea' name='ocupation' type='text' onChange={ onChange }/>
      </div>
    );
  }
}