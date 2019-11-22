import React from 'react';


function PetButtons(props){
  return(
    <div style={flexButtonStyle}>
      <button className='btn' onClick={props.onHungryButtonClick}>Feed!</button>
      <button className='btn' onClick={props.onLoveButtonClick}>Pet!</button>
    </div>
  );
}

export default PetButtons;