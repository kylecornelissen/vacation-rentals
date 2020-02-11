import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from '../Form/Form.js';
import AreasContainer from '../AreasContainer/AreasContainer.js';
import ListingsContainer from '../ListingsContainer/ListingsContainer.js';
import Navigation from '../Navigation/Navigation.js'
import Listing from '../Listing/Listing.js'
import Favorites from '../Favorites/Favorites.js'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Name',
      purpose: 'Purpose',
      favorites: []
    }
  }
  addUser = user => {
    this.setState( {name: user.name, purpose: user.purpose} )
  }
  addFavorite = listingId => {
    if (!this.state.favorites.includes(listingId)) {
      this.setState( {favorites: [...this.state.favorites, listingId]} );
    } else {
      const favorites = [...this.state.favorites];
      favorites.splice(favorites.indexOf(listingId) ,1);
      this.setState( {favorites: favorites} );
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
        <Route path="/:path" render={() => <Navigation name={this.state.name} purpose={this.state.purpose} />} />
          <Switch>
            <Route exact path='/' render={() => <Form addUser={this.addUser} />} />
            <Route exact path='/areas' render={() => <AreasContainer />} />
            <Route exact path="/areas/:area_id/listings" render={ ({location}) =>
              <ListingsContainer location={location} addFavorite={this.addFavorite} favorites={this.state.favorites} />
            } />
            <Route exact path='/areas/:area_id/listings/:listing_id' render={ ({location}) =>
              <Listing location={location} addFavorite={this.addFavorite} favorites={this.state.favorites} />
            } />
            <Route exact path='/favorites' render={ () =>
              <Favorites favorites={this.state.favorites} addFavorite={this.addFavorite} />
            } />
          </Switch>
        </div>
      </Router>
    )
  }
}
