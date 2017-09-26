import React, { Component } from 'react';
import { persistStore } from 'redux-persist';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import store from '../configureStore';

import Header from './Header';
import Assets from './Assets';
import AssetNew from './AssetNew';
import Entities from './Entities';
import EntityNew from './EntitiesNew';
import Landing from './Landing';
import Signup from './Signup';
import Login from './Login';
import Loading from './Loading';
// eslint-disable-next-line
import RequireAuth from './RequireAuth';

class App extends Component {

  state = {
    isReady: false
  }

  componentDidMount() {
    persistStore(store, undefined, () => {
      this.setState({ isReady: true });
    });
  }

  render() {
    if (!this.state.isReady) {
      return(
        <div>
          <Header />
          <Loading />
        </div>
      )
    }
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
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(withRouter(App));
