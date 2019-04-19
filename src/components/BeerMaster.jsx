import React from 'react';
import PropTypes from 'prop-types';

function BeerMaster(props){
  return(
    <div>
      <h2>{props.brand}</h2>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.content}</p>
      <p>{props.type}</p>
    </div>
  );
}

BeerMaster.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string,
  content: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default BeerMaster;
