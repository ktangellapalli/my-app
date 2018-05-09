import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';
import axios from 'axios';

class LoginText extends Component {
  render(){
    return <h2>Please Login</h2>
  }
}

class UsersLists extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }

  render(){
    var self = this;
      return (<tbody>
        { Object.keys(self.props.users).map((key) => (
        <tr key={ self.props.users[key].id }>
          <td>{self.props.users[key].first_name}</td>
          <td>{self.props.users[key].last_name}</td>
          <td>{self.props.users[key].email}</td>
          <td>{self.props.users[key].gender}</td>
        </tr>
        ))
        }
        </tbody>);
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showToggle: true,
      welcomeName: "KIRAN",
      isLogged: false,
      users: {}
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  componentDidMount(){
    axios.get('/users.json').then(response => {
      this.setState({
        users: response.data
      })
    })
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
    let users = null;
    if(this.state.users.length > 0) {
      users = <UsersLists users={this.state.users} />;
    } else {
      users = "No users found";
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {loggedIn}  
          <button onClick={this.handleToggle}>{this.state.isLogged ? "Logout" : "Login"}</button>        
        </header>
        <table className="table-center">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
              </tr>
            </thead>
            {users}
        </table>
      </div>
    );
  }

}

export default App;
