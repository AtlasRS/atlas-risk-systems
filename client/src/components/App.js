import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';

import Header from './Header';
import Assets from './Assets';
import AssetNew from './AssetNew';
import Landing from './Landing';
import AuthForm from './AuthForm';
import RequireAuth from './RequireAuth';

class App extends Component {
  componentDidMount() {
    this.props.authUser();
  };

  render() {
    return (
      <div>
        <Header />
        <Route exact path='/' component={Landing} />
        <Route exact path='/assets' component={RequireAuth(Assets)} />
        <Route exact path='/assets/new' component={RequireAuth(AssetNew)} />
        <Route exact path='/auth/*' component={AuthForm} />
      </div>
    );
  }
};

// App.propTypes = {
//   location: PropTypes.shape({
//     pathname: PropTypes.string.isRequired
//   }).isRequired
// }

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(withRouter(App));
