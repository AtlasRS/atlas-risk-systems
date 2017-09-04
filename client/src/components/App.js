import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Dashboard = () => <h2>Dashboard</h2>
const AssetNew = () => <h2>AssetNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path='/' component={Landing} />
      </BrowserRouter>
    </div>
  );
};

export default App;
