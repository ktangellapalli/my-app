import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';

class LoginText extends Component {
  render(){
    return <h2>Please Login</h2>
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showToggle: true,
      welcomeName: "KIRAN",
      isLogged: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(){
    this.setState( prevState => ({
      isLogged: !prevState.isLogged
    }));
  }
  render() {
    let loggedIn = null;
    if(this.state.isLogged){
      loggedIn = <Welcome greetingName={this.state.welcomeName}/>
    } else {
      loggedIn = <LoginText />
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {loggedIn}          
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleToggle}>{this.state.isLogged ? "Logout" : "Login"}</button>
      </div>
    );
  }

}

export default App;
