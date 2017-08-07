import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './components/Nav.js';
import Classifieds from './components/Classifieds.js';

class App extends Component {

  state = {
      classifieds: []
    }

    async componentDidMount() {
      const response = await fetch('http://localhost:8000/classifieds')
      const json = await response.json()
      this.setState({classifieds: json})
      console.log(this.state);
    }

  render() {
    return (
      <div className="App">
        <Nav/>
        <Classifieds classifieds={this.state.classifieds}/>
      </div>
    );
  }
}

export default App;
