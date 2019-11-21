import React from 'react';
import PetStatus from './PetStatus';
import NewPet from './NewPet';
import Error404 from './Error404';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

// We need the boolean data value is pet alive or dead to be application state, because it dictates the game continuing or ending (if it ends we might route to the new pet path and allow for game start over. All other data--hunger level, love level, etc, can be application state and call on relevant child components. 
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      petStatus: true
    };
  }

  render(){
    return (
      <div>
        <Header />
        <PetStatus />
        <Switch>
          <Route exact path='/'component={PetStatus} />
          <Route path='/newpet'component={NewPet} />
          <Route import Error404 from component={Error404} />
        </Switch>
      </div>
    );
  }
}
export default App;