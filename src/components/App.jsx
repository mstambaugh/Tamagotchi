import React from 'react';
import PetStatus from './PetStatus';
import PetStatusForm from './PetStatusForm';
import Error404 from './Error404';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
// import Moment from 'moment';

function App(){
  return (
    <div>
      <Header />
      <PetStatus />
      <Switch>
        
        <Route exact path='/petstatusform'component={PetStatusForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}



export default App;