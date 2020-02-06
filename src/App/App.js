import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogInForm from '../Form/Form.js';
import AreasContainer from '../AreasContainer/AreasContainer.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LogInForm} />
            <Route exact path="/areas" component={AreasContainer} />
          </Switch>
        </div>
      </Router>
    )
  }
}
