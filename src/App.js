import React, { Component, Fragment} from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import User from './components/User/User.js';
import './App.css';
import Analytics from './components/Analytics/Analytics.js';
class App extends Component {
  render() {
    return (
      <Fragment>
      <Route exact path="/"  component={Home} />
      <Route exact path="/currency/:id" component={User} />
      <Route path="/user/:id/analytics" component={Analytics} />
      </Fragment>
    );
  }
}

export default App;
