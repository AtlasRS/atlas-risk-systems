import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

class Header extends Component {
  handleLogout() {
    this.props.logoutUser(this.props.history);
  }

  renderNavBar() {
    if (this.props.authenticated) {
      return [
        <li key={1}>
          <Link to='/assets'>My Assets</Link>
        </li>,
        <li key={2}>
          <Link onClick={this.handleLogout.bind(this)} to='/'>Logout</Link>
        </li>
      ];
    } else {
      return [
        <li key={1}>
          <Link to='/signup'>Sign Up</Link>
        </li>,
        <li key={2}>
          <Link to='/login'>Log In</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <div className='component-container'>
        <nav id='nav-main'>
          <div className='nav-wrapper'>
            <Link to={this.props.authenticated ? '/assets' : '/'}>
              <img src={logo} alt={"logo"} className='brand-logo'/>
            </Link>
            <ul id='nav-list' className='right'>
              {this.renderNavBar()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}
export default connect(mapStateToProps, actions)(withRouter(Header));
