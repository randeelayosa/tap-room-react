import React from 'react';
import BeerMaster from './BeerMaster';

const  beers =[
  {
    brand: "",
    name: "",
    price: "",
    content: "",
    type: ""
  },
];

function BeerList(){
  return(
    <div>
      {beers.map((details, index) =>
        <BeerMaster brand={detail.brand}
          name={detail.name}
          price={detail.price}
          content={detail.content}
          type={detail.type}
          key={index}/>
      )}
    </div>
  )
}

export default BeerList;
