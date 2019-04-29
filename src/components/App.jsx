import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import BeerList from './BeerList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: []
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
  }

  handleAddingNewBeerToList(newBeer){
    const newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList.push(newBeer);
    this.setState({masterBeerList: newMasterBeerList});
  }
  render(){
    return (
      <div className='content-container'>
        <Header/>
        <Switch>
          <Route exact path='/' render={() =><BeerList beerList={this.masterBeerList} />}/>
          <Route path='/newBeer' render={() =><NewKegControl onNewKegCreation={this.handleAddingNewBeerToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
