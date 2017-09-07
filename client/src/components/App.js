import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Signup from './Signup';
const Dashboard = () => <h2>Dashboard</h2>
const AssetNew = () => <h2>AssetNew</h2>


class App extends Component {
  componentDidMount() {
    this.props.getUser();
  };

  render() {
    return (
      <div id='main-container'>
        <BrowserRouter>
          <div id='main-wrapper'>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/assets' component={Dashboard} />
            <Route exact path='/assets/new' component={AssetNew} />
            <Route exact path='/signup' component={Signup} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
