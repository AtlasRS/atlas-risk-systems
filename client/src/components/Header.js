import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='component-container'>
        <nav id='nav-main'>
          <div className='nav-wrapper'>
            <a href='#' className='brand-logo'>Atlas Risk Systems</a>
            <ul id='nav-list' className='right'>
              <li><a href='#'>Sign Up</a></li>
              <li><a href='#'>Log In</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
