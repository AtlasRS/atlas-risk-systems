import React from 'react';

const Login = () => {
  return (
    <div id='signup-container'>
      <div id='signup-form'>
        <h2>Atlas Risk Systems</h2>
        <a href='/auth/google'>Login With Google</a>
        <a href='/auth/google'>Login With LinkedIn</a>
        <p>Or Login With Email</p>
        <input placeholder='Email'></input>
        <input placeholder='Password'></input>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;
