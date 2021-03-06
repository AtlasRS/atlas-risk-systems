import React, { Component } from 'react';
import { persistStore } from 'redux-persist';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import store from '../configureStore';

import Header from './Header';
import Modal from './Modal';
import Assets from './Assets';
import AssetNew from './AssetNew';
import Entities from './Entities';
import EntityNew from './EntitiesNew';
import EntityAssets from './EntityAssets';
import Landing from './Landing';
import Signup from './Signup';
import Login from './Login';
import Loading from './Loading';
import Confirm from './Confirm';
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

  renderModal() {
    if (this.props.modal) {
      return(
        <div>
          <Modal />
        </div>
      )
    }
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
        {this.renderModal()}
        <Route exact path='/' component={Landing} />
        <Route exact path='/assets' component={Assets} />
        <Route exact path='/assets/new' component={AssetNew} />
        <Route exact path='/entities' component={Entities} />
        <Route exact path='/entities/new' component={EntityNew} />
        <Route exact path='/entity/assets/:entity_id' component={EntityAssets} />
        <Route exact path='/entity/assets/new/:entity_id' component={AssetNew} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/confirm/account/' component={Confirm} />
        <Route path='/confirm/account/:token' component={Confirm} />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    modal: state.modal.modal_display
  };
}

export default connect(mapStateToProps, actions)(withRouter(App));
