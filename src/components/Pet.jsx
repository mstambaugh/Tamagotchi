import React from 'react';
import PropTypes from 'prop-types';
import Header from 'header';



    
function handleFeedClick() {
  props.feed(props.index)
}
function handleLoveClick() {
  props.love(props.index);
}

class Pet extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      petHunger: 5,
      petLove: 5, 
      petAlive: true,
    };

    this.handleIncrementHungry = this.handleIncrementHungry.bind(this);
    this.handleIncrementLonely = this.handleIncrementLonely.bind(this);
  }

  handleIncrementHungry() {
    var currentHunger = this.state.petHunger;
    currentHunger -=1;
    this.setState({ pethunger: currentHunger});

  }
  handleIncrementLonely() {
    var currentLove = this.state.petLove;
    currentLove +=1;
    this.setState({ petLove : currentLove});
  }
  componentDidMount() {
    this.decriment = setInterval(() => this.setDecriments(), 10000);
  }
  setDecriments() {
    var loseLove = this.state.petLove;
    loseLove -= 1;
    var gainHunger = this.state.petHunger;
    gainHunger += 1;
    
    this.setState({ petHunger: gainHunger, petLove: loseLove });
  }
  componentWillUnMount() {
    clearInterval(this.decriment);

  }


  RunawayPet() {
    var runawayPetMessage = [];
    if (this.state.petHunger > 7) {
      runawayPetMessage += ' feed me or I will roll out ';
    }
    if (this.state.petLove < 2) {
      warningMessage += ' play With me or I will leave you for someone better';
    }
    
    return runawayPetMessage;
  }

  ConditionalforTimer() {
    console.log(this.props.pet);
    if (this.state.petHunger < 10 && this.state.petLove > 0) {
      return this.props.pet;
    } else {
      this.setState({ alive: false });
      console.log(this.state.alive);
      return;
    }
  }
  PetButton() {
    if (this.state.petAlive === true) {
      return (<div>
        <PetButtons onHungryButtonClick={this.handleIncrementHungry} onLoveButtonClick={this.handleIncrementLonely} />
        <p>{this.WarningMessage()}</p>
      </div>);

    } else {
      return 'You didn\'t gimme one reason to stay here';
    }
  }
  render () {
      return ( 
        <div className="card">
          {this.state.petAlive ? this.ConditionalforTimer() : (this.props.pet ==  'pet' ? <PetHome /> : <PetHome /> )}
          <p> Name: {this.props.petName}</p>
          <p> Pet: {this.props.pet}</p>
          {this.PetButton()}
        </div>

      );
    }
  }

  Pet.propTypes = {
    petName: PropTypes.string,
    pet: PropTypes.string
  };
  
  export default Pet;












return (
  <div className="container">
    <div className="row">
      <div className="col s12 m4">
        <div className="card dark-grey">
          <div className="card-content white-text">
            <span className="card-title">{props.petName}</span>
            <p><button className="card-body" onClick={handleFeedClick}>Feed!</button></p>
            <span >{props.currentHunger}</span>
            <p><button className="card-body" onClick={handleLoveClick}>Pet!</button></p>
            <span >{props.currentLove}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

Pet.propTypes = {
  petName: PropTypes.string,
  pet: PropTypes.string
};

export default Pet;