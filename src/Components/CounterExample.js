import React, { Component } from 'react';


class CounterExample extends Component {
  state = {
    counter: 1
  }
  
  addToCounter = () => {
    console.log("Clicked")
    this.setState({
      counter: this.state.counter + 1
    })
  }
  deleteFromCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  resetCounter = () => {
    this.setState ({
      counter: 1
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Counter {this.state.counter}</h1>
        <button onClick={this.addToCounter}>Click Me!</button>
        <button onClick={this.deleteFromCounter}>Delete Me</button>
        <button onClick={this.resetCounter}>Reset Me</button>
        <input
        type="text"
        />
      </div>
    );
  }
}

export default CounterExample;