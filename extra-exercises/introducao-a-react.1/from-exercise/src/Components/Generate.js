import React, { Component } from 'react';

export default class Generate extends Component {
  render(){
   const { state } = this.props;
   return(
       <div>

       <h4>{state.firstName} {state.lastName}</h4>
       <p>Address: {state.address}</p>
       <p>Phone: {state.phone}</p>
       <p>Occupation area: {state.ocupation}</p>
       <p>Academic Formation: {state.formation}</p>
       <p>Professional Experiences: {state.experiences}</p>
       <p>Tell us your goals with the company if you are hired: {state.goals}</p>
       <p>If you are hired, tell us how you identify with gender issues and how you would like to be treated: {state.culture}</p>
       </div>  
   );
  }
}