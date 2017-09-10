import React from 'react';
import Ionicon from 'react-ionicons';

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <div className='btn-group'> 
        <a href='/auth/google' className='btn primary' style={{backgroundColor: '#E04827'}}>
          <Ionicon icon="ion-social-google" color="white" className='ion'/> Login with Google
        </a>
        <a href='/auth/google' className='btn primary' style={{backgroundColor: '#267DE2'}}>
          <Ionicon icon="ion-social-linkedin" color="white" className='ion'/> Login with LinkedIn
        </a>
      </div>
      <div className='clearfix' />

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
