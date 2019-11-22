import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPetForm(props) {
  let _petName = null;
  let _pet = null;


  function handleNewPetSubmission(event) {
    event.preventDefault();
    props.onNewPetreation({petName: _petName, pet: _pet, id: v4()});
    _petName.value = '';
    _pet.value = '';
  }

  return (
      <div className="container">
      <form onSubmit={handleNewPetSubmission}>
      <input
        type='text'
        id='name'
        ref={(input) => {_name = input;}}/>
      <select className="form-control" ref={(select) => {_pet = select;}}>
        <option selected value='dog' > Dog </option>
      </select>
        <button type='submit'>Adopt a New Pet!</button> 
      </form>
    </div>
  );
}

NewPetForm.propTypes = {
    onNewPetCreation: PropTypes.func
};

export default NewPetForm;




// currentHunger: _newPetHunger, currentLove: _newPetLove, petName: _petName, alive: _alive,

// handleTroubleshootingConfirmation() {
//   this.setState({ formVisibleOnPage: true });
// }
