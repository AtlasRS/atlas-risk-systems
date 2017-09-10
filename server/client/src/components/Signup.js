import React from 'react';
import Ionicon from 'react-ionicons';

const Signup = () => {
  return (
    <div className='authform'>
      <h2>Sign Up</h2>
      <div className='btn-group'> 
        <a href='/auth/google' className='btn primary' style={{backgroundColor: '#E04827'}}>
          <Ionicon icon="ion-social-google" color="white" className='ion'/> Login with Google
        </a>
        <a href='/auth/google' className='btn primary' style={{backgroundColor: '#267DE2'}}>
          <Ionicon icon="ion-social-linkedin" color="white" className='ion'/> Login with LinkedIn
        </a>
      </div>
      <div className='clearfix' />

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
