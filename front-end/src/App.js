import React, { Component } from 'react';
import Login from './views/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Login</h1>
        <Login />
      </div>
    );
  }
}

export default App;
