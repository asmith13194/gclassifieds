import React from 'react';
import { Card, CardTitle, Col, } from 'react-materialize';

class Classified extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classified, postToggle } = this.props;
    return (<div>
    { postToggle?null:
  		<Col s={12} m={4} l={4}>
          <Card header={<CardTitle reveal image={classified.item_image} waves='light'/>}
          title={classified.title}
          reveal={<p>{classified.description}</p>}>
          <p>${classified.price}</p>
        </Card>
      </Col> }
    </div>
    )
  }
}

export default Classified
