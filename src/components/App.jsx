import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import BeerList from './BeerList';
import NewKegControl from './NewKegControl';
import '../scss/styles.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: [
        {
          brand: 'Wild Craft',
          beer: 'Rome Beauty',
          price: '$7',
          content: '6.8',
          type: 'Cider'
        },
        {
          brand: 'Swift',
          beer: 'Swift Heirloom Batch 1: Sauvie Island Keeved Cider',
          price: '$12',
          content: '6.2',
          type: 'Dry Cider'
        },
        {
          brand: 'Machine House',
          beer: 'Bramling Cross',
          price: '$5',
          content: '6.5',
          type: 'IPA'
        },
        {
          brand: 'pFriem',
          beer: 'Oyster Stout',
          price: '$7',
          content: '5.8',
          type: 'Stout'
        },
        {
          brand: 'Founders',
          beer: 'KBS',
          price: '$11',
          content: '2.3',
          type: 'Imperial Stout'
        },
        {
          brand: 'Culmination / Wayfinder',
          beer: 'Ol\' Money',
          price: '$6',
          content: '0.4',
          type: 'English Barleywine'
        },
        {
          brand: 'Moonraker',
          beer: 'Foam Walker',
          price: '$9',
          content: '7.6',
          type: 'Stout'
        },
        {
          brand: 'Gigantic',
          beer: 'Corpse Reviver #2',
          price: '$7',
          content: '9.3',
          type: 'Sour Ale'
        },
        {
          brand: 'Block 15',
          beer: 'Wonka\'s Wit',
          price: '$9',
          content: '4.5',
          type: 'Wild Witbier'
        },
        {
          brand: 'Little Beast',
          beer: 'Wolf Camp',
          price: '$7',
          content: '6.3',
          type: 'Hoppy Saison'
        },
        {
          brand: 'Ex Novo',
          beer: 'Antwerp Delight',
          price: '$6',
          content: '5.9',
          type: 'Belgian Pale Ale'
        },
        {
          brand: 'Wayfinder / Bailey\'s Taproom / Bee Local',
          beer: 'Hausbier: Beez In The Trap',
          price: '$6',
          content: '4.8',
          type: 'English Summer Ale'
        },
        {
          brand: 'pFriem',
          beer: 'Dark Czech Lager',
          price: '$6',
          content: '5.5',
          type: 'Czech Dark lager'
        },
        {
          brand: 'Pizza Port',
          beer: 'ChronicAle',
          price: '$5',
          content: '4.9',
          type: 'American Amber Ale'
        },
        {
          brand: 'Manifest',
          beer: 'Best Lager',
          price: '$5',
          content: '3.8',
          type: 'Light Lager'
        },
        {
          brand: 'Pelican',
          beer: 'Pilsner',
          price: '$6',
          content: '4.8',
          type: 'German Pilsner'
        },
        {
          brand: 'Logsdon Farmhouse',
          beer: 'Weisse City',
          price: '$6',
          content: '4.9',
          type: 'Hefeweizen'
        },
        {
          brand: 'Bend',
          beer: 'Devil\'s Cabbage',
          price: '$6',
          content: '7.3',
          type: 'West Coast IPA'
        },
        {
          brand: 'El Segundo',
          beer: 'Dreamin\' of Sunshine',
          price: '$7',
          content: '7.2',
          type: 'IPA'
        },
        {
          brand: 'Modern Times',
          beer: 'Dreamspeaker',
          price: '$8',
          content: '7.2',
          type: 'Hazy IPA'
        },
        {
          brand: 'Georgetown',
          beer: 'Meowsa',
          price: '$8',
          content: '8.0',
          type: 'Imperial IPA'
        },
        {
          brand: 'Hopworks 2012',
          beer: 'Noggin Floggin',
          price: '$6',
          content: '11.2',
          type: 'American Barleywine'
        },
        {
          brand: 'Fremont',
          beer: 'Winter Ale',
          price: '$7',
          content: '8.0',
          type: 'Imperial Winter Warmer-Hops'
        }
      ]
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
  }

  handleAddingNewBeerToList(newBeer){
    let newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList.push(newBeer);
    this.setState({masterBeerList: newMasterBeerList});
  }
  render(){
    return (
      <div className='content-container'>
        <Header/>
        <Switch>
          <Route exact path='/' render={() =><BeerList beerList={this.state.masterBeerList} />}/>
          <Route path='/admin' render={() =><NewKegControl onNewKegCreation={this.handleAddingNewBeerToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
