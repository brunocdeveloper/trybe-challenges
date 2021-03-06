import React, { Component } from 'react'; 
import style from './App.css'

export default class App extends Component {

  state = {
    description: "This is a state test",
    count: 0
  }

  alternate = () => {
    const { description } = this.state
    if (description == "This is a state test") {
      this.setState({
        description: "This is state"
      })
    } else this.setState({ description: "This is a state test" })
    
  }

  sumClicks = () => {
    this.setState({
      count: this.state.count += 1
    })
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.alternate} className="style-btn">{this.state.description}</button>
        <span className="text">We can also create a click counter with the status</span>
        <button onClick={this.sumClicks} className="style-btn-count">{this.state.count}</button>
      </div>
    )
  }
}



