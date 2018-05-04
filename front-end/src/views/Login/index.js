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
        fetch('login', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(this.state)
          }).then((response) =>  response.json(), )
          .then((data) => {
            console.log(data)
            if (data.accessToken) {
              console.log('Access token', data.accessToken);
            } else {
              console.log('Access token', data.errorMessage);
            }
          });
        event.preventDefault();

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
