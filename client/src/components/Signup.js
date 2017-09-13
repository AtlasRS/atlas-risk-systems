import React, { Component } from 'react';
import SocialLogins from './SocialLogins'
import SignupForm from './form_components/SignupForm';

class Signup extends Component {
  render() {
    return (
      <div className='authform'>
        <h2>Sign Up</h2>
        <SocialLogins />
        <h4 className='m-t-1'>Or Signup with Email</h4>
        <SignupForm />
        <div className='clearfix' />
      </div>
    );
  }
}

export default Signup;
