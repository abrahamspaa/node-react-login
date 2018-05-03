import React, { Component } from 'react';
import './style.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            password: ''
        };
    
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }
    
    /**
     * On change of user name state will be set
     * 
     * @param {Object} event 
     */
    onUserNameChange(event) {
        this.setState({username: event.target.value});
    }


    /**
     * On change of password will be set in state
     * 
     * @param {Object} event 
     */
    onPasswordChange(event) {
        this.setState({password: event.target.value});
    }
    
    onLogin(event) {
        alert('A name was submitted: ' + this.state.username);
        event.preventDefault();

        fetch('login', {
            method: 'post',
            body: JSON.stringify(this.state)
          }).then(function(response) {
            alert(response);
            return response.json();
          }).then(function(data) {
            console.log('Created Gist:', data.html_url);
          });
    }
    
    render() {
        return (
            <form onSubmit={this.onLogin}>
                <p>
                    <input type="text" value={this.state.username} onChange={this.onUserNameChange} placeholder="User name"/>
                </p>
                <p>
                    <input type="password" value={this.state.password} onChange={this.onPasswordChange} placeholder="Password"/>
                </p>
                <input type="submit" value="Login" />
            </form>
        );
    }
}

