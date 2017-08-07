import React, { Component } from 'react';
import Classified from './Classified.js';
import { Row } from 'react-materialize';

class Classifieds extends Component {

  render() {
    const { classifieds, postToggle, delClassified, toggleEdit, updateClassified, title, description, price, itemImage, newTitle,newDescription, newPrice, newItemImage } = this.props;

    return (
      <div className="classifieds-container" id="classifieds-container">
        <Row>
        {classifieds.map((classified,i) => (
          <Classified
            key={classified.id}
            classified={classified}
            postToggle={postToggle}
            delClassified={delClassified}
            toggleEdit={toggleEdit}
            updateClassified={updateClassified}
            classifieds={classifieds}
            title={title}
            description={description}
            price={price}
            itemImage={itemImage}
            newTitle={newTitle}
            newDescription={newDescription}
            newPrice={newPrice}
            newItemImage={newItemImage}/>
        ))}
        </Row>
    </div>
    );
  }
}

export default Classifieds;
