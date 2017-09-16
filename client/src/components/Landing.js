import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div id='landing-container'>
      <h1>Atlas Risk Systems</h1>
      <h3>A streamlined process for managing your assets</h3>
      <Link to='/auth/signup' className='btn primary'>Sign Up</Link>
    </div>
  )
}

export default Landing;
