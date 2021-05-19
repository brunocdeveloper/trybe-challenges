import React, { Component } from 'react';
import Address from './Components/Address';
import Button from './Components/Button';
import Curriculum from './Components/Curriculum';
import FirstName from './Components/FirstName';
import Generate from './Components/Generate';
import LastName from './Components/LastName';
import Message from './Components/Message';
import Phone from './Phone';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      description: '',
      phone: '',
      address: '',
      ocupation: '',
      formation: '',
      experiences: '',
      goals: '',
      culture: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    console.log(this.state);
    this.setState({
      [target.name]: target.value
    })
  }

  render() {
    return(
      <div>
        <Message />
        <FirstName value={ this.state.firstName } func={ this.handleChange } onChange={ this.handleName } />
        <LastName value={ this.state.lastName } func={ this.handleChange } />
        <Phone onChange={ this.handleChange } />
        <Address onChange={ this.handleChange } />
        <Curriculum func={ this.handleChange } />
        <Button onClick={ this.generateCurriculum } />
        <Generate state={ this.state } />
      </div>
    );
  }
}
