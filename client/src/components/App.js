import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';

import Header from './Header';
import Assets from './Assets';
import AssetNew from './AssetNew';
import Entities from './Entities';
import EntityNew from './EntitiesNew';
import Landing from './Landing';
import AuthForm from './AuthForm';
import RequireAuth from './RequireAuth';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path='/' component={Landing} />
        <Route exact path='/assets' component={Assets} />
        <Route exact path='/assets/new' component={AssetNew} />
        <Route exact path='/entities' component={Entities} />
        <Route exact path='/entities/new' component={EntityNew} />
        <Route exact path='/auth/*' component={AuthForm} />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(withRouter(App));
