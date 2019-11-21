import React from 'react';
import PetStatus from './PetStatus';
import NewPet from './NewPet';
import Error404 from './Error404';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

// We need the boolean data value is pet alive or dead to be application state, because it dictates the game continuing or ending. All other data--hunger level, love level, etc, can be application state and call on  child components to perpetuate the game flow with on clicks and event listeners and communicating info to PetStatus if the pet runs out of love or food, changing the bool value stored in Petstatus from true to false, giving that info to App, and ending the game state, switching to the new game route.
 
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