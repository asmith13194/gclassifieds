import React, { Component } from 'react';
import Classified from './Classified.js';
import { Row } from 'react-materialize';

class Classifieds extends Component {

  // state = {
  //     ads: []
  //   }
  //
  //   async componentDidMount() {
  //     const response = await fetch('http://localhost:8000/classifieds')
  //     const json = await response.json()
  //     this.setState({ads: json})
  //     console.log(this.state);
  //   }

  render() {
    const { classifieds, postToggle } = this.props;

    return (
      <div className="classifieds-container" id="classifieds-container">
        <Row>
        {classifieds.map((classified,i) => (
          <Classified key={i} classified={classified} postToggle={postToggle}/>
        ))}
        </Row>
    </div>
    );
  }
}

export default Classifieds;
