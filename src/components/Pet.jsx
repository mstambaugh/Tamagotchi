import React from 'react';
import PropTypes from 'prop-types';

function Pet(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <p><em>{props.currentHunger}</em></p>
      <p><em>{props.currentLove}</em></p>
      <hr/>
    </div>
  );
}

Pet.propTypes = {
  name: PropTypes.string,
  currentHunger: PropTypes.number,
  currentLove: PropTypes.number
};

export default Pet;