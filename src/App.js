import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './components/Nav.js';
import Classifieds from './components/Classifieds.js';
import Form from './components/Form.js';

class App extends Component {

  state = {
      classifieds: [],
      postToggle: false
    }

  async componentDidMount() {
    const response = await fetch('http://localhost:8000/classifieds')
    const json = await response.json()
    this.setState({classifieds: json})
    console.log(this.state);
  }

  async createClassified(newClassified) {
    const response = await fetch('http://localhost:8000/classifieds', {
      method: 'POST',
      body: JSON.stringify(newClassified),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const classified = await response.json()
    this.setState({classifieds: [...this.state.classifieds, classified]})
  }

  postToggle = ()=>{
    const toggle = !this.state.postToggle
    this.setState({postToggle:toggle})
  }

  render() {
    return (
      <div className="App">
        <Nav
          postToggle={this.postToggle}/>
        <Classifieds
          postToggle={this.state.postToggle}
          classifieds={this.state.classifieds}/>
        <Form
          postToggle={this.state.postToggle}
          createClassified={this.createClassified}/>
      </div>
    );
  }
}

export default App;
