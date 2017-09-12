import React, { Component } from 'react';
import SocialLogins from './SocialLogins'
import LoginForm from './form_components/LoginForm';

class Login extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <SocialLogins />
        <p>Or Login with Email</p>
        <LoginForm />
        <div className='clearfix' />
      </div>
    );
  }
}

export default Login;
