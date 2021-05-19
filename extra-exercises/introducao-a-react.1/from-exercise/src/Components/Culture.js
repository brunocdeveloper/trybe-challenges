import React, { Component } from 'react';

export default class Culture extends Component {
  render() {
    const { culture } = this.props;
    return(
      <div>
        <label htmlFor='culture'>
        If you are hired, tell us how you identify with gender issues and how you would like to be treated:
        </label>
        <textarea id='culture' name='culture' type='text' onChange={ culture }/>
      </div>
    );
  }
}
