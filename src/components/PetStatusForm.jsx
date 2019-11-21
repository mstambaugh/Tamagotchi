import React from 'react';

function PetStatusForm(){
  return (
    <div>
      <form>
        <button type='submit'>PetStatus?</button>
      </form>
    </div>
  );
}

export default PetStatusForm;















// import PropTypes from 'prop-types';

// class StartingPet extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'Churro',
//       currentHunger: 5,
//       currentLove: 15
//     }
//     this.decreaseLove = this.decreaseLove.bind(this);
//     this.increaseLove = this.increaseLove.bind(this);
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