//Parent Component
import React, { Component } from 'react';
import FormUserDetails from './FormPersonalDetails';

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  };

  //Proceed to the nextStep
  nextStep = () => {
    //pulling out the step from the state and putting it
    //into a Variable
    //desctructuring
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  //go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //Handle fields change
  //each input will have its own piece of change
  //each field will be a component state
  //whatever in entred will be handled.
  //takes the event parameter.
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  //will handle how you interchange between the various states
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.setState;

    //thus you can pass the values into each component
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case2: return <h1>FormPersonalDetails</h1>;
        case3: return <h1>Confirm</h1>;
        case4: return <h1>Success</h1>;
    }
  }
}

export default UserForm;
