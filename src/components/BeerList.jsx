import React from 'react';
import BeerMaster from './BeerMaster';
import PropTypes from 'prop-types';

function BeerList(props){
  return(
    <div className='body-container'>
      {props.beerList.map((details, index) =>
        <BeerMaster brand={details.brand}
          beer={details.beer}
          price={details.price}
          content={details.content}
          type={details.type}
          key={index}/>
      )}
    </div>
  )
}

BeerList.propTypes = {
beerList: PropTypes.array
};

export default BeerList;
