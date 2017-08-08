import React from 'react';
import { Card, CardTitle, Col, Button } from 'react-materialize';
import EditForm from './EditForm.js';

class Classified extends React.Component {

  render() {
    const { classified, postToggle, delClassified, toggleEdit, classifieds, title, description, price, itemImage, newTitle, newDescription, newPrice, newItemImage, updateClassified } = this.props;
    return (<div>
    { postToggle?null:
  		<Col s={12} m={6} l={4}>
        <Card
          header={
          <CardTitle
            reveal
            image={classified.item_image}
            waves='light'/>}
          title={classified.title}
          reveal={
            <span>
            {classified.edit?
              <EditForm
              classified={classified}
              classifieds={classifieds}
              postToggle={postToggle}
              title={title}
              description={description}
              price={price}
              itemImage={itemImage}
              newTitle={newTitle}
              newDescription={newDescription}
              newPrice={newPrice}
              newItemImage={newItemImage}
              updateClassified={updateClassified}/>:
            <div>
            <p>${classified.price}</p>
            <p>{classified.description}</p>
            <Button
              className="edit-classified"
              onClick={()=>toggleEdit(classified)}><i className="material-icons card-options">mode_edit</i></Button>
            <Button
              className="del-classified"
              onClick={()=>delClassified(classified.id)}><i className="material-icons card-options">delete_forever</i></Button>
            </div>}</span>}>
          <p>${classified.price}</p>
        </Card>
      </Col> }
    </div>
    )
  }
}

export default Classified
