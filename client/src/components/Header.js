import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import * as entityActions from '../actions/entity';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

class Header extends Component {
  handleLogout = () => {
    this.props.logoutUser(this.props.history);
  }

  clearCurrentEntity = () => {
    this.props.clearEntity(this.props.history);
  }

  renderNavBar() {
    if (this.props.authenticated && this.props.confirmed) {
      return [
        <li key={0}>
          <Link to='/entities'>My Entities</Link>
        </li>,
        <li key={1}>
          <Link onClick={this.clearCurrentEntity} to='/assets'>My Assets</Link>
        </li>,
        <li key={2}>
          <Link onClick={this.handleLogout} to='/'>Logout</Link>
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
            <Link to={this.props.authenticated ? '/entities' : '/'}>
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
  return {
    authenticated: state.auth.authenticated,
    confirmed: state.auth.confirm
  };
}
export default connect(mapStateToProps, Object.assign(actions, entityActions))(withRouter(Header));
