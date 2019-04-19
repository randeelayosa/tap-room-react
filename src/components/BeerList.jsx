import React from 'react';
import BeerMaster from './BeerMaster';

const beers =[
  {
    brand: 'Wild Craft',
    name: 'Rome Beauty',
    price: '$7',
    content: '6.8',
    type: 'Cider'
  },
  {
    brand: 'Swift',
    name: 'Swift Heirloom Batch 1: Sauvie Island Keeved Cider',
    price: '$12',
    content: '6.2',
    type: 'Dry Cider'
  },
  {
    brand: 'Machine House',
    name: 'Bramling Cross',
    price: '$5',
    content: '6.5',
    type: 'IPA'
  },
  {
    brand: 'pFriem',
    name: 'Oyster Stout',
    price: '$7',
    content: '5.8',
    type: 'Stout'
  },
  {
    brand: 'Founders',
    name: 'KBS',
    price: '$11',
    content: '2.3',
    type: 'Imperial Stout'
  },
  {
    brand: 'Culmination / Wayfinder',
    name: 'Ol\' Money',
    price: '$6',
    content: '0.4',
    type: 'English Barleywine'
  },
  {
    brand: 'Moonraker',
    name: 'Foam Walker',
    price: '$9',
    content: '7.6',
    type: 'Stout'
  },
  {
    brand: 'Gigantic',
    name: 'Corpse Reviver #2',
    price: '$7',
    content: '9.3',
    type: 'Sour Ale'
  },
  {
    brand: 'Block 15',
    name: 'Wonka\'s Wit',
    price: '$9',
    content: '4.5',
    type: 'Wild Witbier'
  },
  {
    brand: 'Little Beast',
    name: 'Wolf Camp',
    price: '$7',
    content: '6.3',
    type: 'Hoppy Saison'
  },
  {
    brand: 'Ex Novo',
    name: 'Antwerp Delight',
    price: '$6',
    content: '5.9',
    type: 'Belgian Pale Ale'
  },
  {
    brand: 'Wayfinder / Bailey\'s Taproom / Bee Local',
    name: 'Hausbier: Beez In The Trap',
    price: '$6',
    content: '4.8',
    type: 'English Summer Ale'
  },
  {
    brand: 'pFriem',
    name: 'Dark Czech Lager',
    price: '$6',
    content: '5.5',
    type: 'Czech Dark lager'
  },
  {
    brand: 'Pizza Port',
    name: 'ChronicAle',
    price: '$5',
    content: '4.9',
    type: 'American Amber Ale'
  },
  {
    brand: 'Manifest',
    name: 'Best Lager',
    price: '$5',
    content: '3.8',
    type: 'Light Lager'
  },
  {
    brand: 'Pelican',
    name: 'Pilsner',
    price: '$6',
    content: '4.8',
    type: 'German Pilsner'
  },
  {
    brand: 'Logsdon Farmhouse',
    name: 'Weisse City',
    price: '$6',
    content: '4.9',
    type: 'Hefeweizen'
  },
  {
    brand: 'Bend',
    name: 'Devil\'s Cabbage',
    price: '$6',
    content: '7.3',
    type: 'West Coast IPA'
  },
  {
    brand: 'El Segundo',
    name: 'Dreamin\' of Sunshine',
    price: '$7',
    content: '7.2',
    type: 'IPA'
  },
  {
    brand: 'Modern Times',
    name: 'Dreamspeaker',
    price: '$8',
    content: '7.2',
    type: 'Hazy IPA'
  },
  {
    brand: 'Georgetown',
    name: 'Meowsa',
    price: '$8',
    content: '8.0',
    type: 'Imperial IPA'
  },
  {
    brand: 'Hopworks 2012',
    name: 'Noggin Floggin',
    price: '$6',
    content: '11.2',
    type: 'American Barleywine'
  },
  {
    brand: 'Fremont',
    name: 'Winter Ale',
    price: '$7',
    content: '8.0',
    type: 'Imperial Winter Warmer-Hops'
  }
];

function BeerList(){
  return(
    <div>
      {beers.map((details, index) =>
        <BeerMaster brand={details.brand}
          name={details.name}
          price={details.price}
          content={details.content}
          type={details.type}
          key={index}/>
      )}
    </div>
  )
}

export default BeerList;
