import React, { Component } from 'react';
import Nome from './Nome';

export default class Apresentacao extends Component {
  constructor() {
    super();
    this.state = {
        Apresentação: 'Apresentação',
    }
    this.changeEnter = this.changeEnter.bind(this);
    this.changeLeave = this.changeLeave.bind(this);
  }

  changeEnter() {
    this.setState({
      Apresentação: 'Apresentação' ? 'Digite uma breve apresentação sobre você' : 'Apresentação',
    })
  }

  changeLeave() {
    this.setState({
      Apresentação: 'Digite uma breve apresentação sobre você' ? 'Apresentação' : 'Digite uma breve apresentação sobre você',
    })
  }

  render() {
    return (
      <div>
        <label onMouseEnter={ this.changeEnter } onMouseLeave={ this.changeLeave }>
            {this.state.Apresentação}
            <textarea></textarea>
        </label>
        <Nome />
      </div>
    );
  }
}