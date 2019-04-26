import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import BeerList from './BeerList';

function App(){
  return (
    <div className='content-container'>
      <Header/>
      <Switch>
        <Route exact path='/' component={BeerList} />
      </Switch>
    </div>
  );
}

export default App;
