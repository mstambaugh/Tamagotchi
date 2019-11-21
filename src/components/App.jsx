import React from 'react';
import PetStatus from './PetStatus';
import Error404 from './Error404';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header />
      <PetStatus />
      <Switch>
        <Route exact path='/'component={PetStatus} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;