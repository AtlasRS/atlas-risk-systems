import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';

import Header from './Header';
import Assets from './Assets';
import AssetNew from './AssetNew';
import Entities from './Entities';
import EntityNew from './EntitiesNew';
import Landing from './Landing';
import Signup from './Signup';
import Login from './Login';
import RequireAuth from './RequireAuth';

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div>
        <Header />
        <Route exact path='/' component={Landing} />
        <Route exact path='/assets' component={Assets} />
        <Route exact path='/assets/new' component={AssetNew} />
        <Route exact path='/entities' component={Entities} />
        <Route exact path='/entities/new' component={EntityNew} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
      </div>
    );
  }
};

function mapStateToProps(state) {
  console.log("APP STATE", state);
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(withRouter(App));
