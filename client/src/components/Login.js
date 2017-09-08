import React from 'react';

const Login = () => {
  return (
    <div className='authform'>
      <a href='/auth/google'>Login with Google</a>
      <a href='/auth/google'>Login with LinkedIn</a>
      <p>Or Login with Email</p>
      <input placeholder='Email'></input>
      <input placeholder='Password'></input>
      <button>Login</button>
    </div>
  );
}

export default Login;
