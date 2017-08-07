import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Ads from './components/Ads.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Ads/>
      </div>
    );
  }
}

export default App;
