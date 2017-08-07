import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
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
                onChange={ this.newSubject }/>
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
                onChange={ this.newBody }>
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
                onChange={ this.newSubject }/>
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
                onChange={ this.newSubject }/>
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
                onClick={ ()=>createClassified({
                  title: 'Pikachu 9" Plush Stuffed Toy',
                  description: 'world',
                  price:10,
                  item_image:'https://images-na.ssl-images-amazon.com/images/I/41VwGotRZsL._SY300_.jpg'}) }/>
            </div>
          </div>
        </form>:null}
      </div>
    )
  }
}

export default Form
