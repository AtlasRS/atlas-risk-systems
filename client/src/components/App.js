import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Assets from './Assets';
import AssetNew from './AssetNew';
import Landing from './Landing';
import AuthForm from './AuthForm';

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/assets' component={Assets} />
            <Route exact path='/assets/new' component={AssetNew} />
            <Route exact path='/auth/*' component={AuthForm} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
