import React from 'react';

const Signup = () => {
  return (
    <div className='authform'>
      <a href='/auth/google'>Signup with Google</a>
      <a href='/auth/google'>Signup with LinkedIn</a>
      <p>Or Signup with Email</p>
      <input placeholder='First Name'></input>
      <input placeholder='Last Name'></input>
      <input placeholder='Email'></input>
      <input placeholder='Password'></input>
      <input placeholder='Verify password'></input>
      <button>Signup</button>
    </div>
  );
}

export default Signup;
