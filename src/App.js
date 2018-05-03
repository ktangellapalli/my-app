import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showToggle: true,
      welcomeName: "KIRAN"
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(){
    this.setState( () => ({
      welcomeName: "Ramana"
    }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome greetingName={this.state.welcomeName}/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleToggle}>Change Greeting</button>
      </div>
    );
  }
}

export default App;
