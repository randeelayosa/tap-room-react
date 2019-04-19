import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import BeerList from './BeerList';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={BeerList} />
      </Switch>
      <h1 style={{height: '50px'}}></h1>
    </div>
  );
}

export default App;
