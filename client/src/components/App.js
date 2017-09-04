import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Dashboard = () => <h2>Dashboard</h2>
const AssetNew = () => <h2>AssetNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact={true} path='/' component={Landing} />
        <Route path='/dashboard' component={Dashboard} />
      </BrowserRouter>
    </div>
  );
};

export default App;
