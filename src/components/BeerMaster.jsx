import React from 'react';
import PropTypes from 'prop-types';

function BeerMaster(props){
  return(
    <div className='tapped'>
      <h3>{props.brand}</h3>
      <h2>{props.beer}</h2>
      <p>{props.price}</p>
      <p>{props.content}</p>
      <p>{props.type}</p>
    </div>
  );
}

BeerMaster.propTypes = {
  brand: PropTypes.string.isRequired,
  beer: PropTypes.string.isRequired,
  price: PropTypes.string,
  content: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default BeerMaster;
