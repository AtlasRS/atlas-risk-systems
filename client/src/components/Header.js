import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderNavBar() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <ul id='nav-list' className='right'>
            <li><a href='/auth/signup'>Sign Up</a></li>
            <li><a href='/auth/login'>Log In</a></li>
          </ul>
        );
      default:
        return (
          <ul id='nav-list' className='right'>
            <li><a href='/api/logout'>Logout</a></li>
          </ul>
        );
    }
  }

  render() {
    return (
      <div className='component-container'>
        <nav id='nav-main'>
          <div className='nav-wrapper'>
            <Link to={this.props.auth ? '/assets' : '/'} className='brand-logo'>
              Atlas Risk Systems
            </Link>
            {this.renderNavBar()}
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps)(Header);
