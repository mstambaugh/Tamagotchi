import React from 'react';
import PropTypes from 'prop-types';


    
function handleFeedClick() {
  props.feed(props.index)
}
function handleLoveClick() {
  props.love(props.index);
}
// function aliveCheck() {
//   if ((props.currentHunger == 10) || (props.currentLove < 1)) {
//     (props.alive == false)
// }

function Pet(props){
return (
  <div className="container">
    <div className="row">
      <div className="col s12 m4">
        <div className="card dark-grey">
          <div className="card-content white-text">
            <span className="card-title">{props.petName}</span>
            <p><button className="card-body" onClick={handleFeedClick}>Feed!</button></p>
            <span >{props.currentHunger}</span>
            <p><button className="card-body" onClick={handleLoveClick}>Pet!</button></p>
            <span >{props.currentLove}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

Pet.propTypes = {
  petName: PropTypes.string,
  currentHunger: PropTypes.number,
  currentLove: PropTypes.number,
  alive: PropTypes.bool,
  feed: PropTypes.func,
  pet: PropTypes.func,
};

export default Pet;