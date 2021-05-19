import React, { Component } from 'react';
import AcademicFormation from './Academic';
import ProfessionalExperiences from './Experiences';
import OcupationArea from './OcupationArea';
import Goals from './Goals';
import Culture from './Culture';

export default class Curriculum extends Component {
  render() {
    const { func } = this.props;
    return(
      <div>
        <OcupationArea onChange={ func }/>
        <AcademicFormation formations={ func } />
        <ProfessionalExperiences experiences={ func } />
        <Goals goals={ func } />
        <Culture culture={ func } />
      </div>
    );
  }
}
