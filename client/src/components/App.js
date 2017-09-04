import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './Navbar';
const Dashboard = () => <h2>Dashboard</h2>
const AssetNew = () => <h2>AssetNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <Route exact path='/assets' component={Dashboard} />
          <Route path='/assets/new' component={AssetNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
