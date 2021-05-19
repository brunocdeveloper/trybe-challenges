import React, { Component } from 'react';

export default class Goals extends Component {
  render() {
    const { goals } = this.props;
    return(
      <div>
        <label htmlFor='goals'>
          Tell us your goals with the company if you are hired:
        </label>
        <textarea id='goals' name='goals' type='text' onChange={ goals }/>
      </div>
    );
  }
}
