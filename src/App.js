import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showToggle: true
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(){
    this.setState(prevState => ({
      showToggle: !prevState.showToggle
    }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleToggle}>{this.state.showToggle ? "ON" : "OFF"}</button>
      </div>
    );
  }
}

export default App;
