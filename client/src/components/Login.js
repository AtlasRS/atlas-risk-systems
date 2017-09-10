import React from 'react';
import SocialLogins from './SocialLogins'

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <SocialLogins />

      <p>Or Login with Email</p>
      <input placeholder='Email'></input>
      <input placeholder='Password'></input>
      <div className='pull-right'>
        <button className='btn primary'>Login</button>
      </div>
      <div className='clearfix' />
    </div>
  );
}

export default Login;
