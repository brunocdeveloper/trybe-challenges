import React, { Component } from 'react';

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      currentDateTime: new Date(),
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
        this.setState({
          currentDateTime: new Date(),
        })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  
  render() {
    const { currentDateTime } = this.state;
    const { turnOfButton, showDateTime } = this.props;
    return (
      <section>
          {
            showDateTime
              && <span>{ currentDateTime.toLocaleTimeString() }</span>
              
          }
          
          <button type="button" onClick={ turnOfButton }>Desligar relógio</button>
      </section>
    );
  }
}