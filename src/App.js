import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './components/Nav.js';
import Classifieds from './components/Classifieds.js';
import Form from './components/Form.js';

class App extends Component {

  state = {
      classifieds: [],
      postToggle: false,
      title: '',
      description: '',
      price: 0,
      itemImage: ''
    }

  async componentDidMount() {
    const response = await fetch('http://localhost:8000/classifieds')
    const json = await response.json()
    this.setState({classifieds: json})
  }

  createClassified = async (newClassified) => {
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

  newTitle = (value) => {
    console.log(value);
    this.setState({title:value})
  }

  newDescription = (value) => {
    console.log(value);
    this.setState({description:value})
  }

  newPrice = (value) => {
    console.log(value);
    this.setState({price:value})
  }

  newItemImage = (value) => {
    console.log(value);
    this.setState({itemImage:value})
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
          classifieds={this.state.classifieds}
          toggle={this.postToggle}
          postToggle={this.state.postToggle}
          createClassified={this.createClassified}
          title={this.state.title}
          description={this.state.description}
          price={this.state.price}
          itemImage={this.state.itemImage}
          newTitle={this.newTitle}
          newDescription={this.newDescription}
          newPrice={this.newPrice}
          newItemImage={this.newItemImage}/>
      </div>
    );
  }
}

export default App;
