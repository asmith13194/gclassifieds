import React from 'react'
import { Card, CardTitle, Col, } from 'react-materialize';

const Classified = ({ classified }) => {
  return (
		<Col s={12} m={4} l={4}>
      <Card header={<CardTitle reveal image={classified.item_image} waves='light'/>}
      title={classified.title}
      reveal={<p>{classified.description}</p>}>
      <p><a href="#">This is a link</a></p>
    </Card>
    </Col>
  )
}



export default Classified
