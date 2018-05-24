import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render(){
        return (
            <div>
                <h3>Welcome</h3>
                <Link to="/users">Go to Users</Link>
            </div>
        )
    }
}