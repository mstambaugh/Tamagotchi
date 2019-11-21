import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPet(props) {
  let _newPetHunger = 5;
  let _newPetLove = 5;
  let _petName = 'cookie';
  let _alive = true

//   constructor(props) {
//     super(props);
//     this.state = {
//       formVisibleOnPage: false
//     };
//     this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
//   }

  function handleNewPetSubmission(event) {
    event.preventDefault();
    props.onNewPetreation({currentHunger: _newPetHunger, currentLove: _newPetLove, petName: _petName, alive: _alive, id: v4()});
    petName.value = ' ';
    _location.value = '';
    _issue.value = '';

}

//   handleTroubleshootingConfirmation() {
//     this.setState({ formVisibleOnPage: true });
//   }

    return (
        <div>
        <form onSubmit={handleNewPetSubmission}>
          <button type='submit'>Create New Pet!</button>
        </form>
      </div>
    );
  }

NewPet.propTypes = {
    onNewPetCreation: PropTypes.func
  };

export default NewPet;