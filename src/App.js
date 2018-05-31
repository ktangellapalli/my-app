import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';
import UsersLists from './userslist';
import {connect} from "react-redux";
import {fetchUserData, selectUser } from "./actions"
import { Link } from 'react-router-dom';

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
      isLogged: false,
      users: {}
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  componentDidMount(){
    if(this.props.users && (this.props.users.length > 0)) {
      this.setState({
        users: this.props.users
      })
    }
  }
  handleToggle(){
    this.setState( prevState => ({
      isLogged: !prevState.isLogged
    }));
  }
  componentWillReceiveProps(nextprops){
    this.setState({
      users: nextprops.users
    })
  }
  componentWillUnmount(){
    this.setState({
      users: []
    })
  }
  render() {
    let loggedIn = null;
    if(this.state.isLogged){
      loggedIn = <Welcome greetingName={this.props.match.params.number}/>
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
        <button onClick={this.props.fetchUserData}>Fetch Data</button>
        <Link to="/">Back</Link>
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
function mapStateToProps(state) {
  return {
      users: state.users[0]
  };
}


export default connect(mapStateToProps,{fetchUserData,selectUser})(App);
