import React from 'react';
import PropTypes from 'prop-types';

// Hunger and Love- ints ranging zero to 10, state change when either reaches 0? New Pet form to allow breed selection and naming? need an initial state for hunger and love.Moment functions on both autodeducting overtime from hunger and love, upvote type buttons for user feed food, feed treat, play, pet to increase these. Can put cooldown timers on feed options to more closely reproduce tamagotchi (could also add pet weight/health type stuff to be even closer)
function Pet(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <h4>{props.currentHunger}</h4>
      <p><em>{props.currentLove}</em></p>
      <hr/>
    </div>
  );
}


Ticket.propTypes = {
  name: PropTypes.string.isRequired,
  currentHunger: PropTypes.int.isRequired,
  currentLove: PropTypes.int.isRequired,
};

export default Pet;