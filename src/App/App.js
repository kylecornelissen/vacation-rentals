import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogInForm from '../Form/Form.js';
import AreasContainer from '../AreasContainer/AreasContainer.js';
import ListingsContainer from '../ListingsContainer/ListingsContainer.js';
import Navigation from '../Navigation/Navigation.js'

export default class App extends Component {
  constructor() {
    super()
    this.state = {name: 'Name', purpose: 'Purpose'}
 }

  addUser = user => {
    this.setState( {name: user.name, purpose: user.purpose} )
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation name={this.state.name} purpose={this.state.purpose}/>
          <Switch>
            <Route path="/areas/:id/listings" component={ListingsContainer} />
            <Route exact path='/' render={() => <LogInForm addUser={this.addUser} />} />
            <Route exact path='/areas' render={() => <AreasContainer addUser={this.addUser}/>} />

          </Switch>
        </div>
      </Router>
    )
  }
}
