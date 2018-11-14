import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js'
import Session from './Session.js'
import Break from './Break.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Session />
          <Clock />
          <Break />
      </div>
    );
  }
}

export default App;
