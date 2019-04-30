import React from 'react';
import PropTypes from 'prop-types';
import KegAmount from './KegAmount';

function BeerMaster(props){
  return(
    <div className='barrel'>
      <div>
        <h3>{props.brand}</h3>
        <h2>"{props.beer}"</h2>
        <p>${props.price}/pint</p>
        <p>{props.content}%</p>
        <p>{props.type}</p>
      </div>
      <div>
        <KegAmount/>
      </div>
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
