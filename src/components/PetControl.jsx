import React from 'react';
import Pet from './Pet';
import PropTypes from 'prop-types';
import AdoptaPet from './AdoptAPet'

function PetControl(props) {
    
function PetListEmpty() {
  console.log(props.petList)
  if (props.petList.length == 0) {
    return (
      <div>
        <AdoptAPet/>
      </div>
    );
  } else {
    return <div>
        {props.petList.map((pet) =>
        <Pet
          name={pet.petName}
          pet={pet.pet}
          key={pet.id} />
      )}
    </div>
  }
}

return (
  <div>
      {PetListEmpty()}
  </div>
  );
}

PetControl.propTypes = {
  petList: PropTypes.array
};

export default PetControl;