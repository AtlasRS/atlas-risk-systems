import React from 'react';

const Signup = () => {
  return (
    <div id='signup-container'>
      <div id='signup-form'>
        <h2>Atlas Risk Systems</h2>
        <a href='/auth/google'>Signup With Google</a>
        <a href='/auth/google'>Signup With LinkedIn</a>
        <p>Or Signup With Email</p>
        <input placeholder='First Name'></input>
        <input placeholder='Last Name'></input>
        <input placeholder='Email'></input>
        <input placeholder='Password'></input>
        <input placeholder='Verify password'></input>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default Signup;
