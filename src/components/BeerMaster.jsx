import React from 'react';
import BeerList from './BeerList';

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

export default BeerMaster;
