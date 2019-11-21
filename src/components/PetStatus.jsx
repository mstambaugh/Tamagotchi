import React from 'react';
import Pet from './Pet';
// this is where we should house what we need to tell  our application state that the pet is either alive or dead, changing the state of pet status in app.jsx to true. I think we will want to use props.


function PetStatus() {
  return (
    <div>
      <hr/>
      {petAlive.map((pet, index) =>
        <Pet alive={pet.alive}
          key={index}/>
      )}
    </div>
  );
}


export default PetStatus;