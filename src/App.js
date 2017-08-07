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

  getAllClassifieds = async () => {
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

  updateClassified = async (update,classified) => {
    const bigboi = {}
    if(update.title===""){
      bigboi.title=classified.title
    }else{
      bigboi.title=update.title
    }
    if(update.description===""){
      bigboi.description=classified.description
    }else{
      bigboi.description=update.description
    }
    if(update.price===0){
      bigboi.price=classified.price
    }else{
      bigboi.price=update.price
    }
    if(update.itemImage===""){
      bigboi.itemImage=classified.itemImage
    }else{
      bigboi.itemImage=update.itemImage
    }
    const response = await fetch(`http://localhost:8000/classifieds/${classified.id}`, {
      method: 'PATCH',
      body: JSON.stringify(bigboi),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    this.getAllClassifieds()
  }

  toggleEdit = (classified) => {
    this.state.classifieds.forEach(ad=>{
      if(ad.id===classified.id){
        classified.edit=!classified.edit
      }
    })
    this.setState({classifieds: this.state.classifieds})
  }

  delClassified = async (id) => {
    const response = await fetch(`http://localhost:8000/classifieds/${id}`, {
      method: 'DELETE'
    })
    // const result = await response.json()
    this.getAllClassifieds()
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
          classifieds={this.state.classifieds}
          delClassified={this.delClassified}
          toggleEdit={this.toggleEdit}
          toggle={this.postToggle}
          createClassified={this.createClassified}
          title={this.state.title}
          description={this.state.description}
          price={this.state.price}
          itemImage={this.state.itemImage}
          newTitle={this.newTitle}
          newDescription={this.newDescription}
          newPrice={this.newPrice}
          newItemImage={this.newItemImage}
          updateClassified={this.updateClassified}/>
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
