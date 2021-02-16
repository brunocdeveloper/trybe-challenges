import React, { Component } from 'react';
import Clock from './Clock';
import './App.css'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showDateTime: true,
    }
    this.turnOfButton = this.turnOfButton.bind(this);
  }

  turnOfButton() {
    const { showDateTime } = this.state;
    this.setState({
      showDateTime: !showDateTime,
    })
  }

  render() {
    const { showDateTime } = this.state;
    return (
     <main class='App'>
       { showDateTime && <Clock turnOfButton={ this.turnOfButton } showDateTime={ showDateTime }/> } 
     </main>
   )
 }
}
