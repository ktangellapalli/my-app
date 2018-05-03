import React, { Component } from 'react';


class Welcome extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.greetingName
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({
            name: nextProps.greetingName
        })
    }
    componentDidUpdate(){
        console.log("Welcome component is updated!!!");
    }
  render(){
    return(
      <h1 className="App-title">Welcome {this.state.name}</h1>
    )
  }
}

export default Welcome;