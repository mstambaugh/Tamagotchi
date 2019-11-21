import React from 'react';
import Pet from './Pet';

var initialPetStatus = [
  {
    name: 'Churro',
    currentHunger: 5,
    currentLove: 3
  }
];
function PetStatus(){
  return (
    <div>
      <hr/>
      {initialPetStatus.map((pet, index) =>
        <Pet name={pet.name}
          currentHunger={pet.currentHunger}
          currentLove={pet.currentLove}
          key={index}/>
      )}
    </div>
  );
}


export default PetStatus;