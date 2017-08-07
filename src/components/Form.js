import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.newTitle = this.newTitle.bind(this);
    this.newDescription = this.newDescription.bind(this);
    this.newPrice = this.newPrice.bind(this);
    this.newItemImage = this.newItemImage.bind(this);
    this.newClassified = this.newClassified.bind(this);
  }

  newTitle(event) {
    this.props.newTitle(event.target.value)
  }

  newDescription(event) {
    this.props.newDescription(event.target.value)
  }

  newPrice(event) {
    this.props.newPrice(event.target.value)
  }

  newItemImage(event) {
    this.props.newItemImage(event.target.value)
  }

  newClassified(event) {
    console.log("connected");
    event.preventDefault()
    this.props.toggle()
    this.props.createClassified({
      title: this.props.title,
      description: this.props.description,
      price:this.props.price,
      item_image:this.props.itemImage})
  }

  render() {
    const { postToggle, createClassified } = this.props;
    return (
      <div>
        { postToggle?
        <form
          className="form-horizontal well">
          <div
            className="form-group">
            <div
              className="col-sm-8 col-sm-offset-2">
              <h4>Post Classified</h4>
            </div>
          </div>
          <div
            className="form-group">
            <label
              htmlFor="title"
              className="col-sm-2 control-label">
              Title
            </label>
            <div
              className="col-sm-8">
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter a title"
                name="title"
                onChange={ this.newTitle }/>
            </div>
          </div>
          <div
            className="form-group">
            <label
              htmlFor="description"
              className="col-sm-2 control-label">
              Description
            </label>
            <div
              className="col-sm-8">
              <textarea
                name="description"
                id="description"
                className="form-control"
                onChange={ this.newDescription }>
              </textarea>
            </div>
          </div>
          <div
            className="form-group">
            <label
              htmlFor="price"
              className="col-sm-2 control-label">
              Price
            </label>
            <div
              className="col-sm-8">
              <input
                type="number"
                className="form-control"
                id="price"
                placeholder="Enter a price"
                name="price"
                onChange={ this.newPrice }/>
            </div>
          </div>
          <div
            className="form-group">
            <label
              htmlFor="item_image"
              className="col-sm-2 control-label">
              Image URL
            </label>
            <div
              className="col-sm-8">
              <input
                type="text"
                className="form-control"
                id="item_image"
                placeholder="Enter a image url"
                name="item_image"
                onChange={ this.newItemImage }/>
            </div>
          </div>
          <div
            className="form-group">
            <div
              className="col-sm-8 col-sm-offset-2">
              <input
                type="submit"
                value="Send"
                className="btn btn-primary"
                onClick={ this.newClassified }/>
            </div>
          </div>
        </form>:null}
      </div>
    )
  }
}

export default Form
