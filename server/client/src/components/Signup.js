import React from 'react';
import SocialLogins from './SocialLogins'

const Signup = () => {
  return (
    <div className='authform'>
      <h2>Sign Up</h2>
      <SocialLogins />

      <p>Or Signup with Email</p>
      <input placeholder='First Name'></input>
      <input placeholder='Last Name'></input>
      <input placeholder='Email'></input>
      <input placeholder='Password'></input>
      <input placeholder='Verify password'></input>
      <div className='pull-right'>
        <button className='btn primary'>Sign Up</button>
      </div>
      <div className='clearfix' />
    </div>
  );
}

export default Signup;
