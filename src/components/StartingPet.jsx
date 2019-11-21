// import React, { Component } from 'react';
// // import PropTypes from 'prop-types';
// // import { v4 } from 'uuid';
// // import Moment from 'moment';

// class StartingPet extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'Churro',
//       currentHunger: 5,
//       currentLove: 15
//     }
//     this.decreaseHunger = this.decreaseHunger.bind(this);
//     this.increaseLove = this.increaseLove.bind(this);
//   }
  
//   decreaseHunger() {
//     const totalHunger= this.state.currentHunger - 1;
//     this.setState({
//       currentHunger: totalHunger
//     });
//   }

//   increaseLove() {
//     const totalLove = this.state.currentLove + 1;
//     this.setState({
//       currentLove: totalLove
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button action={this.decreaseHunger} label='Give Churro a meal'/>
//         <button action={this.decreaseHunger} label='Give Churro some lovin' />
//       </div>
//     )
//   }
// }






















// function NewPetForm(props){
//   let _name = null;
//   let _currentHunger = 2;
//   let _issue = null;

//   function handleNewTicketFormSubmission(event) {
//     event.preventDefault();
//     props.onNewTicketCreation({name: _name.value, currentHunger: _currentHunger.value, currentLove: _currentLove.value, id: v4(), timeOpen: new Moment()});
//     _name.value = '';
//     _currentHunger.value = '';
//     _currentLove.value = '';
//   }

//   return (
//     <div>
//       <form onSubmit={handleNewTicketFormSubmission}>
//         <input
//           type='text'
//           id='name'
//           placeholder='Tamagotchi Name'
//           ref={(input) => {_name = input;}}/>
        
//         <input
//           type='text'
//           id='currentHunger'
//           placeholder='Current Hunger'
//           ref={(input) => {_currentHunger = input;}}/>
//         <in
//           id='currentLove'
//           placeholder='CurrentLove'
//           ref={(textarea) => {_issue = textarea;}}/>
       
       
//         <button type='submit'>Help!</button>
//       </form>
//     </div>
//   );
// }

// NewTicketForm.propTypes = {
//   onNewTicketCreation: PropTypes.func
// };

// export default NewPetForm;