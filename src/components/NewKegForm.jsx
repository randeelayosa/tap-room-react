import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props) {
  let _brand = null;
  let _beer = null;
  let _price = null;
  let _content = null;
  let _type = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({brand: _brand.value, beer: _beer.value, price: _price.value, content: _content.value, type: _type.value});
    _brand.value = '';
    _beer.value = '';
    _price.value = '';
    _content.value = '';
    _type.value = '';
  }

  return(
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type="text"
          id="brand"
          placeholder='Brand'
          ref={(input) => {_brand = input;}}/>
        <br>
        <input
          type="text"
          id="beer"
          placeholder='Beer'
          ref={(input) => {_beer = input;}}/>
        <br>
        <input
          type="number"
          id="price"
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <br>
        <input
          type="number"
          id="content"
          placeholder='Alcohol Content'
          ref={(input) => {_content = input;}}/>
        <br>
        <input
          type="text"
          id="type"
          placeholder='Beer Type'
          ref={(input) => {_type = input;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
