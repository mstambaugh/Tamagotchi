import React from 'react';
import PetHome from './PetHome';
import NewPetForm from './AdoptAPet';
import PetControl from './PetControl';
// import Error404 from './Error404';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

// We could use a boolean data value is pet alive or dead to be application state, because it dictates the game continuing or ending. All other data--hunger level, love level, etc, can be application state and call on  child components to perpetuate the game flow with on clicks and event listeners and communicating info to PetStatus if the pet runs out of love or food, changing the bool value stored in Petstatus from true to false, giving that info to App, and ending the game state, switching to the new game route.
 
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      MasterList: []
    };
    this.handleNewPet = this.handleNewPet.bind(this);
  }

  handleNewPet(newPet){
    let status = this.state.MasterList.slice();
    status.push(newPet);
    this.setState({MasterList: status});
  }

  render(){
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path='/' component={PetControl} ></Route>
            <Route path='/AdoptAPet' render={()=><NewPetForm onPetCreation={this.handleNewPet} />}></Route>
            <Route path='/PetControl' render={()=><PetControl PetList={this.state.MasterList} />}></Route>
            {/* <Route import Error404 from component={Error404} /></Route> */}
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;