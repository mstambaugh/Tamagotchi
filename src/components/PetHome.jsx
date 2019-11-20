import React from 'react';
import PropTypes from 'prop-types';

function PetHome(props){
  return (
    <div>
      <hr/>
      {props.petHome.map((pet) =>
        <name names={pet.name}
          hunger={pet.currentHunger}
          love={pet.currentLove}
          key={pet.id}/>
      )}
    </div>
  );
}

PetHome.propTypes = {
  petHome: PropTypes.array
};

export default PetHome;