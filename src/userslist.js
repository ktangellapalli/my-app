import React, { Component } from 'react';

export default class UsersLists extends Component {
    constructor(props){
      super(props)
      this.state = {
        localusers: this.props.users
      }
    }
  
    render(){
      var self = this;
        return (<tbody>
          {  Object.keys(self.state.localusers).length > 0 ? Object.keys(self.state.localusers).map((key) => (
          <tr key={ self.state.localusers[key].id }>
            <td>{self.state.localusers[key].first_name}</td>
            <td>{self.state.localusers[key].last_name}</td>
            <td>{self.state.localusers[key].email}</td>
            <td>{self.state.localusers[key].gender}</td>
          </tr>
          ))
          : <tr>
              <td colSpan="4">No Records Found</td>
            </tr>
          }
          </tbody>);
    }
  }