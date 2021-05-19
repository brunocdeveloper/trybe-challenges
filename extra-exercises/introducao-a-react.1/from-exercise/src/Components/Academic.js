import React, { Component } from 'react';

export default class AcademicFormation extends Component {
  render() {
    const { formations } = this.props;
    return(
      <div>
        <label htmlFor='academic'>
            Academic Formation:
        </label>
        <textarea id='academic' name='formation' type='text' onChange={ formations }/>
      </div>
    );
  }
}