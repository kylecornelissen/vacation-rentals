import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import LogInForm from './Form.js';
import AreasContainer from './AreasContainer.js';
import Home from './Home.js';

import Navigation from '../Navigation/Navigation.js'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      path: '/'
    };
  }

  changePath = path => {
    this.setState({ path: path })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Redirect to={this.state.path}/>
          <Switch>
            <Route exact path="/">
                <LogInForm changePath={this.changePath}/>
            </Route>
            <Route exact path="/areas">
              <Navigation/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
