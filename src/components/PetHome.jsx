import React from 'react';
import Pet from './Pet';
import PropTypes from 'prop-types';
// this is where we should house what we need to tell  our application state that the pet is either alive or dead, changing the state of pet status in app.jsx to true. I think we will want to use props.


function PetHome() {
  return (
    <div>
      < {Pet.props.PetStatus.map((create) =>
        <Pet
      //     petName={create.petName}
      //     petLove={create.currentLove}
      //     petHunger={create.currentHunger}
      //     alive={create.alive}
      //     feed={props.feed}
      //     pet={props.pet} />
      // )}
//     </div>
//   );
// }


  

 
// export default PetStatus;
// PetStatus.propTypes = {
//   petStatus: Proptypes.bool,
//   currentLove: PropTypes.number,
//   currentHunger: PropTypes.number
//   feed: PropTypes.func,
//   pet: PropTypes.func,

// };