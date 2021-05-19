import React, { Component } from 'react';

export default class ProfessionalExperiences extends Component {
  render() {
    const { experiences } = this.props;
    return(
      <div>
        <label htmlFor='experiences'>
           Professional Experiences:
        </label>
        <textarea id='experiences' name='experiences' type='text' onChange={ experiences }/>
      </div>
    );
  }
}