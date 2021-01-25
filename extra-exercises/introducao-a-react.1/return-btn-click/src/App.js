import React, { Component } from 'react';
import './App.css';


class MyButton extends Component {
  render() {
    return (
    <div className='container'>
      <button className='styleBtn' onClick={() => this.props.handleClick(this.props.label)}>{this.props.label}</button>
    </div>)
  }
}

class MyLabel extends Component {
  render() {
    return <span className='topic'>You clicled the button: {this.props.text}</span>
  }
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labelText: '',
    }
  }

  setLabelText = (labelText) => {
    this.setState({ labelText })
  }

  render() {
    console.log(this.state)
    return (
      <div>
      <MyLabel text={this.state.labelText}/> 
      <MyButton handleClick={this.setLabelText} label='button 1'/>
      <MyButton handleClick={this.setLabelText} label='button 2'/>
      <MyButton handleClick={this.setLabelText} label='button 3'/>
      <MyButton handleClick={this.setLabelText} label='button 4'/>
      </div>
    )
  }
}

export default App;
