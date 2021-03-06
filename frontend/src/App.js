import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';

import HomePage from './pages/HomePage/HomePage'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
